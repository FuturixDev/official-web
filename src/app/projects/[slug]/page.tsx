"use client";
import { deslugify } from "@/utils/url";
import { LoadingOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function Page({ params }: PageProps) {
  const router = useRouter();

  useEffect(() => {
    params.then((res) => {
        router.replace(`/projects/#${deslugify(res.slug)}`);
    });
  }, [params, router]);

  return (
    <div className="container">
      <div className="flex">
        <LoadingOutlined className="text-5xl mx-auto" />
      </div>
    </div>
  );
}
