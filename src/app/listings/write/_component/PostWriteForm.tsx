"use client";

import { useRef, useState, useCallback, ChangeEvent, DragEvent } from "react";
import { X, Upload, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./PostWriteForm.module.css";
// import { createPost } from "@/lib/actions/posts";
// import { createClient } from "@/utils/supabase/client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { BackButton, XBackButton } from "@/components/ui/BackButton";
import { Button } from "@/components/ui/Button";
// import { uploadPostImages } from "@/lib/actions/uploadPostImages";

const MAX_FILE_MB = 4;
const MAX_FILE_BYTES = MAX_FILE_MB * 1024 * 1024;

interface UploadedImage {
  id: string;
  url: string;
  file: File;
}
export default function PostWriteForm() {
  const router = useRouter();
  //   const supabase = createClient();

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ----- 이미지 업로드 상태 (PostForm 내부에 전부 포함) -----
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [imageError, setImageError] = useState<string>("");
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const addFiles = useCallback((fileList: FileList | null) => {
    const files = Array.from(fileList ?? []);
    if (!files.length) return;

    const accepted: UploadedImage[] = [];
    let rejected = false;

    for (const file of files) {
      if (!file.type.startsWith("image/")) {
        rejected = true;
        continue;
      }
      if (file.size > MAX_FILE_BYTES) {
        rejected = true;
        continue;
      }
      accepted.push({
        id: `${file.name}-${file.size}-${Date.now()}-${Math.random()
          .toString(36)
          .slice(2, 8)}`,
        url: URL.createObjectURL(file),
        file,
      });
    }

    setImageError(
      rejected
        ? `이미지 파일만, 최대 ${MAX_FILE_MB}MB까지 업로드할 수 있어요.`
        : "",
    );
    if (accepted.length) {
      setImages((prev) => [...prev, ...accepted]);
    }
  }, []);

  const handleImageInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    addFiles(e.target.files);
    e.target.value = "";
  };

  const handleImageDrop = (e: DragEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsDragging(false);
    addFiles(e.dataTransfer.files);
  };

  const removeImage = (id: string) => {
    setImages((prev) => {
      const target = prev.find((img) => img.id === id);
      if (target) URL.revokeObjectURL(target.url);
      return prev.filter((img) => img.id !== id);
    });
  };

  const scrollImagesBy = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 200, behavior: "smooth" });
  };
  // ----- 이미지 업로드 상태 끝 -----
  //   const handleSubmit = async (e: React.FormEvent) => {
  //     e.preventDefault();

  //     if (!title.trim() || !contents.trim()) {
  //       toast.error("제목과 내용을 입력해주세요");
  //       return;
  //     }

  //     if (isSubmitting) return;

  //     setIsSubmitting(true);

  //     try {
  //       const {
  //         data: { session },
  //         error: sessionError,
  //       } = await supabase.auth.getSession();

  //       if (sessionError) throw sessionError;

  //       if (!session) {
  //         toast.error("로그인이 필요합니다");
  //         router.push("/login");
  //         return;
  //       }

  //       // 1) 이미지 먼저 Storage에 업로드 → public URL 목록 확보
  //       let uploadedImages: { url: string; order: number }[] = [];
  //       if (images.length > 0) {
  //         try {
  //           uploadedImages = await uploadPostImages(
  //             images.map((img) => img.file),
  //             session.user.id,
  //           );
  //         } catch (uploadErr) {
  //           toast.error(
  //             uploadErr instanceof Error
  //               ? uploadErr.message
  //               : "이미지 업로드 중 오류가 발생했습니다",
  //           );
  //           return;
  //         }
  //       }

  //       // 2) 제목/내용/이미지 URL 목록을 함께 게시글 생성 API로 전송
  //       await createPost(title, contents, session.access_token, uploadedImages);

  //       toast.success("게시글이 작성되었습니다");
  //       router.push("/board");
  //     } catch (error) {
  //       console.error("게시글 작성 실패:", error);
  //       toast.error(
  //         error instanceof Error
  //           ? `게시글 작성에 실패했습니다: ${error.message}`
  //           : "게시글 작성 중 오류가 발생했습니다",
  //       );
  //     } finally {
  //       setIsSubmitting(false);
  //     }
  //   };

  return (
    //  onSubmit={handleSubmit}

    <>
      <div className={styles.header}>
        <DetailHeader title="매물등록" />
      </div>
      <form className={styles.form}>
        {/* 이미지 업로드 */}
        <div className={styles.imageField}>
          <label className={styles.imageLabel}>
            게시글 이미지{" "}
            <span className={styles.imageLabelHint}>
              (최대 {MAX_FILE_MB}MB)
            </span>
          </label>

          <div className={styles.imageRow}>
            {images.length > 3 && (
              <button
                type="button"
                onClick={() => scrollImagesBy(-1)}
                aria-label="이전"
                className={`${styles.imageArrow} ${styles.imageArrowLeft}`}
              >
                <ChevronLeft size={16} />
              </button>
            )}

            <div ref={scrollRef} className={styles.imageScroll}>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleImageDrop}
                className={`${styles.imageAddTile} ${
                  isDragging ? styles.imageAddTileDragging : ""
                }`}
              >
                <Upload size={18} color="#a3a3a3" />
                <span className={styles.imageAddTileLabel}>추가</span>
              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                className={styles.imageHiddenInput}
                onChange={handleImageInputChange}
              />

              {images.map((img) => (
                <div key={img.id} className={styles.imageThumb}>
                  <img src={img.url} alt="" className={styles.imageThumbImg} />
                  <button
                    type="button"
                    onClick={() => removeImage(img.id)}
                    aria-label="이미지 삭제"
                    className={styles.imageThumbRemove}
                  >
                    <X size={13} />
                  </button>
                </div>
              ))}
            </div>

            {images.length > 3 && (
              <button
                type="button"
                onClick={() => scrollImagesBy(1)}
                aria-label="다음"
                className={`${styles.imageArrow} ${styles.imageArrowRight}`}
              >
                <ChevronRight size={16} />
              </button>
            )}
          </div>

          {imageError && <p className={styles.imageErrorText}>{imageError}</p>}
        </div>

        <div className={styles.field}>
          <label>앨범찾기</label>
        </div>
        <div className={styles.field}>
          <label>앨범명</label>
          <input
            type="text"
            placeholder="앨범명을 입력해주세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <label>매물상태</label>
          <textarea
            placeholder="매물의 상태와 하자유무, 구매시기 등 최대한 상세히 입력해주세요. "
            value={contents}
            onChange={(e) => setContents(e.target.value)}
          />
        </div>

        <div
          className="fixed flex gap-2 bottom-0 left-1/2 -translate-x-1/2 w-full 
    max-w-app max-w-[560px] p-4 bg-white border-t border-gray-200"
        >
          <Button
            variant="primary"
            size="lg"
            type="submit"
            className="mb-3 rounded-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "등록중..." : "등록하기"}
          </Button>
        </div>
      </form>
    </>
  );
}

const DetailHeader = ({ title }: { title: string }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 max-w-[560px] mx-auto bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="flex justify-between items-center gap-3 h-14 ">
        <XBackButton color="black" />
        <span className="flex-1 text-center text-base font-medium text-gray-900 truncate">
          {title ? title : "상세페이지"}
        </span>
        <div className="w-11" />
      </div>
    </header>
  );
};
