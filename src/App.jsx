import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/thiagobrolly.png',
      name: 'Thiago Sousa',
      role: 'Web Developer',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galera',
      },
      {
        type: 'paragraph',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias exercitationem laboriosam odit, esse repudiandae cupiditate ducimus omnis beatae veritatis maiores vel praesentium nobis a eveniet ad voluptate, saepe tempore. Hic.',
      },
      {
        type: 'link',
        content: '#liana.dev',
      },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/thiagobrolly.png',
      name: 'Liana Goes',
      role: 'Dev',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Olá pessoal',
      },
      {
        type: 'paragraph',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias exercitationem laboriosam odit, esse repudiandae cupiditate ducimus omnis beatae veritatis maiores vel praesentium nobis a eveniet ad voluptate, saepe tempore. Hic.',
      },
      {
        type: 'link',
        content: '#thiago.dev',
      },
    ],
    publishedAt: new Date('2023-03-12 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {
            posts.map((post) => (
              <Post key={post.id} post={post} />
            ))
          }
        </main>
      </div>
    </div>
  );
}
