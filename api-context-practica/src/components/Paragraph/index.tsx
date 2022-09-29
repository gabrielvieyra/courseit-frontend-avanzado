interface ParagraphProps {
  bio: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ bio }) => {
  return <p>{bio}</p>;
};

export default Paragraph;
