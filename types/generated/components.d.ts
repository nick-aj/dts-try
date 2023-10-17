import type { Schema, Attribute } from '@strapi/strapi';

export interface RestaurantOpeningHours extends Schema.Component {
  collectionName: 'components_restaurant_opening_hours';
  info: {
    displayName: 'Opening Hours';
  };
  attributes: {
    Days: Attribute.String;
    Hours: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'restaurant.opening-hours': RestaurantOpeningHours;
    }
  }
}
