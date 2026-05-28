/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface GiftItem {
  id: string;
  name: string;
  category: string;
  suggestedValuePin?: number; // Optional reference value indicator
}

export interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  description: string;
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isCompleted: boolean;
}

export type GiftCategory = 'Cozinha' | 'Sala' | 'Quarto' | 'Banheiro' | 'Lavanderia';
