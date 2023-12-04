export type UserProfileProps = {
  title: string;
  name: string;
  education: string;
  techStack: string;
  career: string;
  field: string;
  number: string;
  email: string;
  notionPageId: string;
  githubLink: string;
  aboutMe: string;
};

export const USER_PROFILE: UserProfileProps = {
  title: 'Serengeti 개발자 ',
  name: '홍길동',
  education: '고구려대학교 컴퓨터공학과 졸업',
  career: '구글 수석 엔지니어 ',
  field: 'Front-end',
  techStack: 'react, javascript, typescript, html, css',
  number: '010-1234-5678',
  email: 'serengti@serengti.net',
  notionPageId: 'pageId',
  githubLink: 'https://github.com/',
  aboutMe:
    '안녕하세요, 저는 Serengeti 개발자 홍길동입니다.\n지금부터 제 소개를 시작해볼까 합니다.\n저에 대해 더 알고 싶으시다면\nScroll을 내려주세요.',
};
