import styled from "styled-components";

export const Container = styled.div``;

export const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

// prev commemt
export const CommentContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`
export const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`
export const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`
export const Text = styled.span`
  font-size: 14px;
`