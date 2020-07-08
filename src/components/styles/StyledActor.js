import styled from 'styled-components';

export const StyledActor = styled.div`
  font-family: 'Abel', sans-serif;
  color: #fff;
  background: #1c1c1c;
  border-radius: 49px;
  padding: 5px;
  text-align: center;

  img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 45px;
  }

  .actor-name {
    display: block;
    font-size: 18px;
    margin: 10px 0 0 0;
  }

  .actor-playing {
    display: block;
    font-size: 16px;
    font-style: italic;
  }

  .actor-character {
    display: block;
    font-size: 16px;
  }

  .actor-gender {
    display: block;
    font-size: 12px;
    margin: 0 0 5px 0;
  }
`;
