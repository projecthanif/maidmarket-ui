import React from "react";
import { Camera, Image as ImageIcon, Plus, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface MediaUploadProps {
  previews: string[];
  isDragging: boolean;
  onDragOver: (e: React.DragEvent<HTMLLabelElement>) => void;
  onDragLeave: (e: React.DragEvent<HTMLLabelElement>) => void;
  onDrop: (e: React.DragEvent<HTMLLabelElement>) => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveFile: (index: number) => void;
}

export function MediaUpload({
  previews,
  isDragging,
  onDragOver,
  onDragLeave,
  onDrop,
  onFileChange,
  onRemoveFile,
}: MediaUploadProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ImageIcon className="h-5 w-5" /> Media
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Label
          htmlFor="media-upload"
          onDragOver={onDragOver}
          onDragEnter={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4 transition-colors cursor-pointer w-full py-12 ${
            isDragging
              ? "border-primary bg-primary/10"
              : "border-primary/20 bg-[#F8F9FE] hover:bg-primary/5"
          }`}
        >
          <div className="p-4 bg-white shadow-sm rounded-2xl">
            <Camera className="h-8 w-8 text-[#30347F]" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-[#30347F]">
              Upload Product Photo
            </h3>
            <p className="text-base text-muted-foreground font-normal">
              Drag and drop or click to browse
            </p>
          </div>
          <p className="text-sm text-muted-foreground/70 font-normal">
            PNG, JPG, or WEBP up to 10MB
          </p>
          <Input
            id="media-upload"
            type="file"
            className="sr-only"
            multiple
            accept="image/png, image/jpeg, image/webp"
            onChange={onFileChange}
          />
        </Label>

        {previews.length > 0 && (
          <div className="flex gap-4 flex-wrap">
            {previews.map((preview, index) => (
              <div
                key={index}
                className="relative h-28 w-28 rounded-xl overflow-hidden border bg-[#F8F9FE] flex items-center justify-center group"
              >
                <img
                  src={preview}
                  alt={`Preview ${index}`}
                  className="object-cover h-full w-full"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => onRemoveFile(index)}
                    className="bg-white/20 hover:bg-red-500 hover:text-white text-white rounded-full p-1.5 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
            <Label
              htmlFor="media-upload-more"
              className="h-28 w-28 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors"
            >
              <Plus className="h-8 w-8 text-gray-400" />
              <Input
                id="media-upload-more"
                type="file"
                className="sr-only"
                multiple
                accept="image/png, image/jpeg, image/webp"
                onChange={onFileChange}
              />
            </Label>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
