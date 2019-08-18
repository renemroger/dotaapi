import React from "react";
import { Card, Image } from "semantic-ui-react";
import getHeroImage from "api_helpers/getHeroImage";

const src = "/images/wireframe/white-image.png";

export default function CardGroup(props) {
  return (
    <Card.Group itemsPerRow={6}>
      {props.heroes.map(hero => {
        console.log(hero);
        const name = hero.localized_name;
        const legs = hero.legs;
        const roles = hero.roles.join(", ");
        const img = `http://cdn.dota2.com/apps/dota2/images/heroes/${hero.name
          .replace("npc_dota_hero_", "")
          .toLowerCase()
          .trim()}_lg.png`;
        console.log(hero);
        if (hero.primary_attr === "str") {
          return (
            <Card fluid color="red" key={hero.id}>
              <Image src={img} />
              <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Description>
                  {name} has {legs} legs.
                </Card.Description>
                <Card.Description>Main roles: {roles}</Card.Description>
              </Card.Content>
            </Card>
          );
        } else if (hero.primary_attr === "agi") {
          return (
            <Card fluid color="green" key={hero.id}>
              <Image src={img} />
              <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Description>
                  {name} has {legs} legs.
                </Card.Description>
                <Card.Description>Main roles: {roles}</Card.Description>
              </Card.Content>
            </Card>
          );
        } else if (hero.primary_attr === "int") {
          return (
            <Card fluid color="blue" key={hero.id}>
              <Image src={img} />
              <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Description>
                  {name} has {legs} legs.
                </Card.Description>
                <Card.Description>Main roles: {roles}</Card.Description>
              </Card.Content>
            </Card>
          );
        }
        return (
          <Card fluid color="white" key={hero.id}>
            <Image src={img} />
            <Card.Content>
              <Card.Header>{name}</Card.Header>
              <Card.Description>
                {name} has {legs} legs.
              </Card.Description>
              <Card.Description>Main roles: {roles}</Card.Description>
            </Card.Content>
          </Card>
        );
      })}
    </Card.Group>
  );
}
