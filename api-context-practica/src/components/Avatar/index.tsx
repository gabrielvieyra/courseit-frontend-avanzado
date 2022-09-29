interface AvatarProps {
  src: string;
}

const avatar: React.FC<AvatarProps> = ({ src }) => {
  return <img src={src} alt='avatar' />;
};

export default avatar;
