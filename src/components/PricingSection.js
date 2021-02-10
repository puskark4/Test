import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { Link } from "./../util/router.js";
import { useAuth } from "./../util/auth.js";
import "./PricingSection.scss";

function PricingSection(props) {
  const auth = useAuth();

  const items = [
    {
      id: "starter",
      name: "Starter",
      price: "10",
      perks: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Integer molestie lorem at massa",
      ],
    },
    {
      id: "pro",
      name: "Pro",
      price: "20",
      perks: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Integer molestie lorem at massa",
        "Faucibus porta lacus fringilla vel",
        "Aenean sit amet erat nunc",
      ],
    },
    {
      id: "business",
      name: "Business",
      price: "50",
      perks: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Integer molestie lorem at massa",
        "Faucibus porta lacus fringilla vel",
        "Aenean sit amet erat nunc",
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
      ],
    },
  ];

  return (
    <Section
      id="pricing"
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={3}
          spaced={true}
          className="has-text-centered"
        />
        <div className="columns is-centered is-variable is-4 is-desktop">
          {items.map((item, index) => (
            <div
              className="PricingSection__column column is-one-third-desktop"
              key={index}
            >
              <div
                className={
                  "PricingSection__card card" +
                  (item.emphasized === true ? " emphasized" : "")
                }
              >
                <div className="PricingSection__card-content card-content">
                  <div className="PricingSection__name has-text-weight-bold">
                    {item.name}
                  </div>
                  <div className="PricingSection__price has-text-weight-bold is-size-1">
                    ${item.price}
                    <span className="PricingSection__period is-size-3">
                      /mo
                    </span>
                  </div>

                  {item.description && (
                    <p className="PricingSection__description">
                      {item.description}
                    </p>
                  )}

                  {item.perks && (
                    <ul className="PricingSection__perks">
                      {item.perks.map((perk, index) => (
                        <li key={index}>
                          <i className="fas fa-check has-text-primary" />
                          {perk}
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link
                    className="PricingSection__button button is-medium is-primary"
                    to={
                      auth.user
                        ? `/purchase/${item.id}`
                        : `/auth/signup?next=/purchase/${item.id}`
                    }
                  >
                    Choose
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default PricingSection;
