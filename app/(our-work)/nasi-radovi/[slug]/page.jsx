import styles from './page.module.scss';

// interface Project {
//   id: string;
//   title: string;
//   slug: string;
//   descriptionTitle: string;
//   description: string;
//   descriptionExceprt: string;
//   videos: string[];
//   images: string[];
//   prevProjectTitle: string;
//   prevProjectUrl: string;
//   nextProjectTitle: string;
//   nextProjectUrl: string;
// }

const project = {
  id: '1',
  title: 'Project 1',
  slug: 'project-1',
  descriptionTitle: 'This is a description title of project 1',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  descriptionExceprt:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  images: ['/small.png'],
  videos: [
    '/projectVideo.mp4',
    '/projectVideo2.mp4',
    '/projectVideo3.mp4',
    '/projectVideo4.mp4',
    '/projectVideo5.mp4',
  ],
  prevProjectTitle: 'Project 0',
  prevProjectUrl: '/projects/project-0',
  nextProjectTitle: 'Project 2',
  nextProjectUrl: '/projects/project-2',
};

const media = [
  {
    src: '/project-1.jpg',
  },
  {
    src: '/project-2.jpg',
  },
  {
    src: '/project-3.jpg',
  },
  {
    src: '/project-4.jpg',
  },
  {
    src: '/project-5.jpg',
  },
];

export default function Project() {
  return <main></main>;
}
