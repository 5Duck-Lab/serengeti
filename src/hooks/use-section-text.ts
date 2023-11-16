import { TextProps } from '@/constants/sectionText';
interface SectionTextProps {
  TEXT: TextProps;
}
export const useSectionText = ({ TEXT }: SectionTextProps) => {
  const { title, name, number, email, notionPageId, githubLink, aboutMe, education, techStack, career, field } = TEXT;

  return { title, name, number, email, notionPageId, githubLink, aboutMe, education, techStack, career, field };
};
