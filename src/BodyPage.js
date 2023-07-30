import HumanBodyDiagram from './HumanBodyDiagram.js';
import AnimatedPage from './AnimatedPage.js';

const BodyPage = () => {
  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  document.body.style.margin = 0;
  document.body.style.display = 'flex';
  document.body.style.justifyContent = 'center';
  document.body.style.alignItems = 'center';
  document.body.style.minHeight = '100vh';

  return (
    <AnimatedPage>
      <div className='content' style={contentStyle}>
        <h1>The Human Exploitation Diagram</h1>
        {/* Add more links for other body parts */}
        <div>
          <HumanBodyDiagram size='80vh' />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default BodyPage;
