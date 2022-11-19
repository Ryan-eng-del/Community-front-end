import styled from 'styled-components';

const TagStyleArt = styled.div`
  padding: 2px 8px;
  transition: background 300ms ease 0s;
  border-radius: 100px;
  font-size: 13px;
  background-color: rgba(242, 242, 242, 1);
  color: rgba(41, 41, 41, 1);
  line-height: 20px;
  display: inline-block;
  margin-right: 10px;

  &:hover {
    background-color: rgb(230, 230, 230);
  }
`;

const TagArticle = (props: { tags: string[] }) => {
  return (
    <>
      {props.tags.map((tag, index) => (
        <TagStyleArt key={index}>{tag}</TagStyleArt>
      ))}
    </>
  );
};

export default TagArticle;
