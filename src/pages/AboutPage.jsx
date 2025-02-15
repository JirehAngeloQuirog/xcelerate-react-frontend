import React from 'react';
import Navbar from '../Navbar';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
        <Navbar />
      <h1>About Xcelerate</h1>

      <section className="overview">
        <h2>Overview</h2>
        <p>
          Xcelerate is transforming the way athletes and organizers engage with sports events. Imagine a platform where athletes no longer have to deal with paper forms or complex registration processes. Instead, with just a few clicks, they can sign up for any event, view their upcoming competitions, and receive real-time updates on schedules or venue changes. It’s a one-stop solution that not only makes participation easier but also keeps them informed and organized.
        </p>
        <p>
          For event organizers, Xcelerate is a game-changer. It automates the entire event management process, from handling registrations to managing participant data and generating schedules. Instead of sifting through endless paperwork and manually organizing details, organizers can focus on making the event experience seamless. With automated notifications, online payments, and even performance tracking tools, Xcelerate empowers organizers to efficiently promote and advertise events of any size, whether it’s a local tournament or a major international competition.
        </p>
        <p>
          For athletes, Xcelerate offers the convenience of effortless participation in sports events. No more paperwork or complicated registrations, everything is handled online, allowing athletes to sign up for events in minutes. With a personalized dashboard, they can easily track upcoming competitions, receive real-time updates on schedules or changes, and focus on their performance. Xcelerate also ensures secure payment processing, making the entire process seamless. It’s the ultimate tool for athletes who want to stay organized and fully engaged in their sports journey.
        </p>
      </section>

      <section className="features">
        <h2>Features</h2>

        <div className="features-section">
          <h3>For Athletes:</h3>
          <ul>
            <li><strong>Online Registration:</strong> Athletes can easily register for various sports events through the app, eliminating the need for paper forms or manual submissions.</li>
            <li><strong>Personal Dashboard:</strong> Athletes can view all their registered events, track upcoming competitions, and manage their profiles.</li>
            <li><strong>Notifications & Updates:</strong> Real-time updates about event schedules, venue changes, or other important information are sent directly to registered athletes.</li>
            <li><strong>Payment Integration:</strong> Seamless payment processing for registration fees, ensuring secure and fast transactions.</li>
            <li><strong>Performance Tracking:</strong> Some versions of the app may allow athletes to track their performance or results for multiple events in one place.</li>
            <li><strong>Leaderboard:</strong> Provides real-time rankings and performance updates, allowing athletes and organizers to track results and compare standings throughout an event.</li>
          </ul>
        </div>

        <div className="features-section">
          <h3>For Organizers:</h3>
          <ul>
            <li><strong>Event Creation & Management:</strong> Organizers can create and customize events (single or multi-sport) with details like dates, venues, categories, and rules.</li>
            <li><strong>Automated Registration:</strong> Xcelerate automates the registration process, collecting athlete data, payments, and waivers in an organized manner.</li>
            <li><strong>Participant Management:</strong> Organizers can view and manage all participants, including filtering by sport, age, gender, or other criteria.</li>
            <li><strong>Scheduling & Notifications:</strong> The app can generate schedules and send out notifications regarding event timings, venue changes, and other logistics.</li>
            <li><strong>Automated Scoring & Results:</strong> The app may integrate tools for organizers to manage scoring, track results, and share final outcomes with participants instantly.</li>
            <li><strong>Analytics & Reporting:</strong> Get detailed insights into event performance, participant demographics, and other key metrics to improve future event planning.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;