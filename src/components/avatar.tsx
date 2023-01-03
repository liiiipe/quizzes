import Image from "next/image";

interface AvatarProps {
  upload?: boolean;
  src?: string | null;
  widht?: "small" | "medium" | "big";
}

const Avatar: React.FC<AvatarProps> = ({ upload, src, widht }) => {
  const avatarImg = src === undefined || src === null ? "https://gustui.s3.amazonaws.com/avatar.png" : src;
  const widhtImg = widht === "small" ? 10 : widht === "medium" ? 16 : 20;
  return (
    <div className={`relative rounded-full w-${widhtImg} h-${widhtImg} ${upload ? "opacity-50 cursor-pointer" : ""}`}>
      <Image
        className="absolute left-0 top-0 w-full h-full rounded-full object-cover"
        loader={() => avatarImg}
        src={avatarImg}
        alt="Avatar de usuário"
        width={widhtImg}
        height={widhtImg}
      />
      {
        upload && <svg className="absolute left-6 top-6 w-12 h-12 opacity-50 hover:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M194.6 32H317.4C338.1 32 356.4 45.22 362.9 64.82L373.3 96H448C483.3 96 512 124.7 512 160V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V160C0 124.7 28.65 96 64 96H138.7L149.1 64.82C155.6 45.22 173.9 32 194.6 32H194.6zM256 384C309 384 352 341 352 288C352 234.1 309 192 256 192C202.1 192 160 234.1 160 288C160 341 202.1 384 256 384z" /></svg>
      }
    </div>
  )
}

export default Avatar;