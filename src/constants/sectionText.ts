export type TextProps = {
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
export interface SectionTextProps {
  sectionText: TextProps;
}
export const TEXT: TextProps = {
  title: 'Serengeti 개발자 ',
  name: '유진하',
  education: '광운대학교 컴퓨터소프트웨어학부 졸업',
  career: 'Tmax Metaverse',
  field: 'Front-End',
  techStack: 'react, javascript, three js',
  number: '010-6553-1916',
  email: 'yjs19162@daum.net',
  notionPageId: '43cf367fd2e1492dac4363f7ee475fce',
  githubLink: 'https://github.com/YooJinHa96/serengeti',
  aboutMe:
    '안녕하세요. Serengeti 개발자 유진하입니다. 저는 코끼리를 좋아합니다.\
     저는 강아지를 좋아합니다. 저는 고양이를 좋아합니다. 저는 사자를 좋아합니다. 저는 토끼를 좋아합니다. 저는 기린을 좋아합니다. 저는 코뿔소를 좋아합니다.\
     저는 물소를 좋아합니다. 저는 악어를 좋아합니다. 저는 표범을 좋아합니다.',
};
