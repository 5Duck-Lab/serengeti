import Spacing from '@/components/Spacing';
import { USER_PROFILE } from '@/constants/useProfile';
import ScrollSlideText from '@/components/ScrollSlideText';

const Section1 = () => {
  // Title Page
  const { title, aboutMe } = USER_PROFILE;

  const aboutMeLines = aboutMe.split('\n');

  return (
    <div style={{ position: 'relative', zIndex: 2 }}>
      <ScrollSlideText
        text={title}
        style={{ paddingLeft: '20px', fontSize: '100px', color: '#fffdd0', fontWeight: '500' }}
        direction="up"
      />
      {aboutMeLines.map((line, index) => (
        <ScrollSlideText
          key={index}
          text={line}
          style={{ paddingLeft: '20px', fontSize: '24px', color: '#fff', fontWeight: 'bold' }}
          direction="left"
          duration={0.35}
        />
      ))}
      <Spacing size={1000} />
    </div>
  );
};

// 이하 컴포넌트 정의 및 스타일링 부분 생략

export default Section1;
