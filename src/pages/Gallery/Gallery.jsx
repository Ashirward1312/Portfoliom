"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Instagram,
  ArrowRight,
  ArrowLeft,
  Play,
  Sparkles,
} from "lucide-react";

import reel1 from "../../Images/e1.png";
import reel2 from "../../Images/e2.png";

const REELS = [
  {
    id: "reel1",
    url: "https://www.instagram.com/reel/DRt1i8jCKZN/",
    image: reel1,
    tag: "PRADEEP MAHESHWARI",
  },
  {
    id: "reel2",
    url: "https://www.instagram.com/reel/DR6RkTzCEku/",
    image: reel2,
    tag: "PRADEEP MAHESHWARI",
  },
];

export default function InstaReelsSection() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full bg-black py-10 sm:py-14 overflow-hidden">
      {/* Subtle Background (black & white) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]" />

      <div className="relative max-w-3xl mx-auto px-4">
        {/* Top Bar: Back Button + Instagram Link */}
        <div className="mb-6 flex items-center justify-between">
          {/* Back Button (black & white) */}
          <button
            onClick={() => navigate(-1)}
            className="group inline-flex items-center gap-2 rounded-full
                       border border-white/15 bg-white/5
                       px-3.5 py-1.5
                       text-[10px] sm:text-[11px]
                       font-medium uppercase tracking-[0.2em]
                       text-neutral-200 backdrop-blur-sm
                       transition-all
                       hover:border-white hover:bg-white
                       hover:text-black hover:shadow-lg hover:shadow-white/20
                       active:scale-95"
          >
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full
                         bg-white text-black shadow-sm
                         transition-colors
                         group-hover:bg-black group-hover:text-white"
            >
              <ArrowLeft className="h-3 w-3" />
            </span>
            <span>Back</span>
          </button>

          {/* Instagram Link (neutral) */}
          <a
            href="https://www.instagram.com/maheshventures"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px]
                       text-neutral-300 hover:text-white
                       font-medium uppercase tracking-wider transition-colors"
          >
            <Instagram className="h-3.5 w-3.5" />
            <span>Follow us on Instagram</span>
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>

        {/* Header (Label + Title) */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <div className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-medium">
              Featured Reels
            </span>
          </div>

          <h2 className="text-lg sm:text-xl font-bold text-white">
            LEARN WITH <span className="text-neutral-300">INTENT</span>
          </h2>
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {REELS.map((reel) => (
            <a
              key={reel.id}
              href={reel.url}
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <div
                className="relative overflow-hidden rounded-xl sm:rounded-2xl
                           border border-neutral-700 hover:border-white/70
                           bg-neutral-900 transition-all duration-300
                           hover:shadow-lg hover:shadow-white/15"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[9/12] overflow-hidden">
                  <img
                    src={reel.image}
                    alt="Instagram Reel"
                    className="h-full w-full object-cover
                               filter grayscale
                               group-hover:scale-110
                               transition-transform duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />

                  {/* Tag */}
                  <span
                    className="absolute top-2 left-2 px-1.5 py-0.5 rounded
                               bg-white text-[7px] sm:text-[8px]
                               font-semibold uppercase text-black"
                  >
                    {reel.tag}
                  </span>

                  {/* Play Icon */}
                  <div
                    className="absolute inset-0 flex items-center justify-center
                                opacity-0 group-hover:opacity-100
                                transition-opacity duration-300"
                  >
                    <div
                      className="h-8 w-8 sm:h-10 sm:w-10 rounded-full
                                  bg-white flex items-center justify-center shadow-xl"
                    >
                      <Play className="h-3 w-3 sm:h-4 sm:w-4 text-black ml-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Tagline */}
        <p className="mt-5 text-center text-[16px] sm:text-m text-neutral-400">
          <Sparkles className="inline-block h-4 w-4 text-neutral-200 mr-1.5" />
          DISCOVER MORE — WATCH OUR FULL PODCASTS ON YOUTUBE AND FOLLOW US ON
          INSTAGRAM FOR DAILY INSIGHTS AND UPDATES.
        </p>
      </div>
    </section>
  );
}