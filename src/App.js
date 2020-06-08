import React, { Component } from 'react';
import ContactCard from "./component/ContactCard";

class App extends Component {
  render() {
    return (
      <>
        <ContactCard
          urlName="https://www.w3schools.com/howto/img_avatar.png"
          name="John Tron"
          mobile="3478995656"
          work="345322323235"
          email="Jotron@gmail.com"
        />
        <ContactCard
         urlName="https://www.w3schools.com/howto/img_avatar2.png"
          name="Sally Mane"
          mobile="3478995656"
          work="345322323235"
          email="sally@gmail.com"
        />
        <ContactCard
        urlName="https://w0.pngwave.com/png/122/453/computer-icons-user-profile-avatar-female-profile-png-clip-art.png"
          name="Kally Janer"
          mobile="3478995656"
          work="345322323235"
          email= "Kally@gmail.com"
        />
      </>
    );
  }
}

export default App;

