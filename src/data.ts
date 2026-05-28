/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GiftItem, GalleryPhoto } from './types';

export const COUPLE_INFO = {
  bride: "Maria Joaquina",
  groom: "Felipe Amorim",
  fullName: "Maria & Felipe",
  welcomePhrase: "Estamos construindo o nosso recanto de paz e amor, e a sua presença é a peça mais importante que faltava para completar o nosso primeiro lar.",
  date: "2026-10-24T15:00:00", // Scheduled future date in 2026
  dateFormatted: "Sábado, 24 de Outubro",
  timeFormatted: "Às 15:00 horas",
  address: "Rua João Batista, 555",
  neighborhood: "Apt 142 - Bloco B",
  city: "Montes Claros, São Paulo",
  addressNotes: "Próximo ao Parque das Palmeiras",
  whatsAppNumber: "5585988660540", // Preserved from source
  mapsUrl: "https://maps.google.com/?q=Rua+João+Batista,+555,+Montes+Claros,+São+Paulo",
};

export const COLOR_PALETTE = {
  white: { name: "Branco Pure", hex: "#FFFFFF" },
  iceGray: { name: "Cinza Gelo", hex: "#F1F3F5" },
  olive: { name: "Oliva", hex: "#3D5A2C" },
  terracotta: { name: "Terracotta", hex: "#B35A38" }
};

export const INSTAGRAM_SPOTIFY_LINKS = {
  spotifyPlaylist: "https://open.spotify.com/playlist/37i9dQZF1DX82mRFSZ98gG", // Cozy relaxing acoustic tunes
};

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "g1",
    url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200",
    title: "Nossa Futura Sala de Estar",
    description: "Um espaço acolhedor e cheio de luz natural para receber as pessoas que mais amamos."
  },
  {
    id: "g2",
    url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200",
    title: "A Cozinha dos Aromas",
    description: "Onde o café fresco e as melhores receitas serão preparadas com muito carinho."
  },
  {
    id: "g3",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1200",
    title: "Quarto Principal",
    description: "Nosso refúgio calmo, minimalista e ideal para repousar ao final de cada dia."
  },
  {
    id: "g4",
    url: "https://images.unsplash.com/photo-1620626011761-996317b6979a?auto=format&fit=crop&q=80&w=1200",
    title: "Cantinho do Café",
    description: "Onde começamos cada manhã compartilhando sorrisos, planos e energia positiva."
  }
];

export const SUGGESTED_GIFTS: GiftItem[] = [
  // COZINHA
  { id: "k1", name: "Jogo de Panelas Antiaderentes", category: "Cozinha", suggestedValuePin: 250 },
  { id: "k2", name: "Fritadeira Elétrica Airfryer", category: "Cozinha", suggestedValuePin: 350 },
  { id: "k3", name: "Liquidificador de Alta Potência", category: "Cozinha", suggestedValuePin: 150 },
  { id: "k4", name: "Conjunto de Pratos de Cerâmica (16pçs)", category: "Cozinha", suggestedValuePin: 180 },
  { id: "k5", name: "Porta Temperos Giratório em Inox", category: "Cozinha", suggestedValuePin: 90 },
  { id: "k6", name: "Conjunto de Talheres Premium", category: "Cozinha", suggestedValuePin: 120 },
  { id: "k7", name: "Forno Micro-ondas Moderno", category: "Cozinha", suggestedValuePin: 400 },
  { id: "k8", name: "Garrafa Térmica Minimalista", category: "Cozinha", suggestedValuePin: 80 },
  { id: "k9", name: "Mixer de Mão 3 em 1", category: "Cozinha", suggestedValuePin: 140 },
  { id: "k10", name: "Batedeira Prática", category: "Cozinha", suggestedValuePin: 220 },
  { id: "k11", name: "Torradeira em Aço Escovado", category: "Cozinha", suggestedValuePin: 110 },
  { id: "k12", name: "Conjunto de Assadeiras de Vidro Refratário", category: "Cozinha", suggestedValuePin: 95 },
  { id: "k13", name: "Organizador de Pia e Bancada", category: "Cozinha", suggestedValuePin: 60 },
  { id: "k14", name: "Jogo de Copos de Cristal Ecológico", category: "Cozinha", suggestedValuePin: 85 },
  
  // SALA
  { id: "s1", name: "Manta Ultra Macia para Sofá", category: "Sala", suggestedValuePin: 110 },
  { id: "s2", name: "Kit Almofadas Decorativas (Tons Terrosos)", category: "Sala", suggestedValuePin: 85 },
  { id: "s3", name: "Vaso de Cerâmica Artesanal", category: "Sala", suggestedValuePin: 120 },
  { id: "s4", name: "Quadros Decorativos Boho Minimalistas", category: "Sala", suggestedValuePin: 150 },
  { id: "s5", name: "Tapete Geométrico de Fibra Natural", category: "Sala", suggestedValuePin: 280 },
  { id: "s6", name: "Conjunto de Porta-Retratos Elegantes", category: "Sala", suggestedValuePin: 75 },
  { id: "s7", name: "Difusor Elétrico de Aromas com Led", category: "Sala", suggestedValuePin: 130 },
  { id: "s8", name: "Organizador de Controle Remoto e Bandeja", category: "Sala", suggestedValuePin: 70 },

  // QUARTO
  { id: "b1", name: "Jogo de Lençol 400 Fios Microfibra", category: "Quarto", suggestedValuePin: 180 },
  { id: "b2", name: "Dois Travesseiros Ortopédicos Extra Soft", category: "Quarto", suggestedValuePin: 120 },
  { id: "b3", name: "Abajur de Mesa Minimalista Wood", category: "Quarto", suggestedValuePin: 140 },
  { id: "b4", name: "Espelho de Parede Moldura Redonda", category: "Quarto", suggestedValuePin: 190 },
  { id: "b5", name: "Manta de Algodão em Tricô para Cama", category: "Quarto", suggestedValuePin: 160 },
  { id: "b6", name: "Kit Organizador de Closet (6pçs)", category: "Quarto", suggestedValuePin: 80 },
  { id: "b7", name: "Conjunto Cabides de Veludo Antideslizante (30 un)", category: "Quarto", suggestedValuePin: 90 },
  { id: "b8", name: "Jogo de Fronhas Acetinadas", category: "Quarto", suggestedValuePin: 65 },

  // BANHEIRO
  { id: "ba1", name: "Kit Toalhas de Banho Ampla Absorção (4 peças)", category: "Banheiro", suggestedValuePin: 160 },
  { id: "ba2", name: "Conjunto Porta-Sabonete e Porta-Escovas Cerâmica", category: "Banheiro", suggestedValuePin: 75 },
  { id: "ba3", name: "Tapete de Algodão Egípcio Ultra Soft", category: "Banheiro", suggestedValuePin: 65 },
  { id: "ba4", name: "Cesto de Bambu Organizador", category: "Banheiro", suggestedValuePin: 110 },
  { id: "ba5", name: "Nichos Organizadores de Parede", category: "Banheiro", suggestedValuePin: 85 },
  { id: "ba6", name: "Toalha de Rosto e Mão Kit Linho", category: "Banheiro", suggestedValuePin: 55 },

  // LAVANDERIA
  { id: "l1", name: "Varal Retrátil de Parede Utilitário", category: "Lavanderia", suggestedValuePin: 80 },
  { id: "l2", name: "Ferro de Passar Roupas a Vapor Cerâmica", category: "Lavanderia", suggestedValuePin: 140 },
  { id: "l3", name: "Cesto de Roupa Suja em Fibra Natural", category: "Lavanderia", suggestedValuePin: 110 },
  { id: "l4", name: "Organizadores de Produtos de Limpeza (Set)", category: "Lavanderia", suggestedValuePin: 70 },
  { id: "l5", name: "Tábua de Passar Estável Reforçada", category: "Lavanderia", suggestedValuePin: 130 },
  { id: "l6", name: "Mop Giratório Limpeza Prática", category: "Lavanderia", suggestedValuePin: 95 },
  { id: "l7", name: "Kit Pregadores Premium com Organizador", category: "Lavanderia", suggestedValuePin: 40 }
];
