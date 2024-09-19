import { useState } from 'react';
import Learner from './components/Learner/Learner';
import './App.css';

export default function App() {
  const [learners] = useState([
    {
      name: 'Karthika TS',
      bio: 'Karthika is a passionate software developer with over five years of experience in building web applications. She loves working with JavaScript frameworks and has a keen interest in user experience design. In her free time, Cait enjoys hiking and photography, often merging her love for nature with her technical skills.',
      scores: [
        { date: '2018-02-08', score: 77 },
        { date: '2018-04-22', score: 92 },
        { date: '2018-09-15', score: 68 }
      ]
    },
    {
      name: 'Vishvak RO',
      bio: 'Vishvak is an accomplished data analyst specializing in transforming raw data into actionable insights. With a strong background in statistics and data visualization, she helps organizations make informed decisions. Outside of work, Holly is an avid reader and enjoys exploring new coffee shops around the city.',
      scores: [
        { date: '2018-12-14', score: 88 },
        { date: '2019-01-09', score: 79 },
        { date: '2019-02-23', score: 91 },
        { date: '2019-03-01', score: 95 }
      ]
    },
    {
      name: 'Shashni RO',
      bio: 'Shashni is a creative graphic designer with a passion for branding and visual storytelling. With a background in fine arts, he brings a unique perspective to digital design. Wes spends his weekends painting and participating in local art exhibitions, showcasing his latest projects and ideas.',
      scores: [
        { date: '2018-10-11', score: 62 },
        { date: '2018-11-24', score: 74 },
        { date: '2018-12-19', score: 85 }
      ]
    }
  ]);

  return (
    <>
      <h1>Learners Portfolio</h1>
      {learners.map((learner, idx) => (
        <Learner key={idx} learner={learner} />
      ))}
    </>
  );
}
