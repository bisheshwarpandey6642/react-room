  import React, { Component } from "react";
import { FaTripadvisor, FaAward, FaUber, FaCat } from "react-icons/fa";
 import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaTripadvisor />,
        title: "Trip Advice",
        info:
          "Panning for a vacation. We can arrange for you."
      },
      {
        icon: <FaAward />,
        title: "Seven Star",
        info:
          "Certified with best seven star hotel in country."
      },
      {
        icon: <FaUber />,
        title: "Uber Facility",
        info:
          "24x7 Uber facility is available."
      },
      {
        icon: <FaCat />,
        title: "Care of your pets",
        info:
          "Love your pets and don't want to leave. Bring them we will take care for you. "
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
