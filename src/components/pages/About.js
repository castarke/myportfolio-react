// importing react
import React from 'react';
// creating and exporting About function
export default function About() {
  return (
    <div style={{ textAlign: 'center', marginTop: '25px', marginBottom: '75px' }}>
      {/* using profile pic from public folder */}
      <img src="assets/profilepic.jpeg" alt="My Image" style={{ display: 'block', margin: '0 auto', borderRadius:'50%', overflow:'hidden',boxShadow: '0 0 550px rgba(255, 215, 0, 0.3)'}} />
      <h1 style={{ marginTop: '25px' }}>About Me!</h1>
      <div style={{ margin: '0 20px' }}>
        {/* breakinng up the paragraph for visual reasons */}
        <p className='about'>
          Hello there! I'm a passionate junior programmer who is currently honing my skills through the Georgia Tech Full Stack bootcamp. The ever-evolving tech world has captivated me, and I find great joy in exploring new facets of this exciting industry and mastering the art of coding.
        </p>
        <p className='about'>
          When I'm not immersed in class or work, I have a few hobbies that keep me balanced and fulfilled. One of my favorite ways to unwind is by firing up the smoker and indulging in the delicious art of barbecuing. There's something truly satisfying about perfecting the balance of flavors and creating mouthwatering dishes.
        </p>
        <p className='about'>
          Another big part of my life is my four-legged companion. I absolutely adore spoiling my dog, who brings immeasurable joy and companionship to my everyday life. Whether it's long walks, playtime, or just cuddling on the couch, we have an unbreakable bond.
        </p>
        <p className='about'>
          Beyond tech and pets, I also have a strong fascination with cars. Working on cars has become a therapeutic outlet for me, allowing me to dive into the mechanical world and get my hands dirty. Whether it's tinkering under the hood, upgrading performance parts, or restoring classic vehicles, I find immense satisfaction in this hands-on hobby.
        </p>
        <p className='about'>
          With a deep-rooted passion for programming and an array of diverse interests, I'm constantly seeking new avenues for personal and professional growth. I'm excited to connect with like-minded individuals, share knowledge, and embark on exciting projects that push the boundaries of technology.
        </p>
      </div>
    </div>
  );
}
