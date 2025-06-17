"use client";

import Subscribe from "./components/Subscribe";

import Icons from "./components/Icons";
import NewArrival from "./components/NewArrival";
import Flavor from "./components/Flavor";
import Deals from "./components/Deals";
import Link from "next/link";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <div className="hidden 2xl:flex gap-4 p-4 bg-[#f5f5f5] w-[100%]">
        <div className="h-[420px] xl:h-[440px] w-1/4">
          <Link href="https://burningdaily.com/collections/litto">
            <img
              className=" w-full h-full object-cover object-center lg:object-left-bottom"
              src="https://cdn.shopify.com/s/files/1/0656/3826/9187/files/BD-2024-LITTO_Zooted_Mobile_72e0dc63-f648-4e5b-abee-20b12e5eadac.jpg?v=1737134076"
              alt="litto all-in-one"
            />
          </Link>
        </div>
        <div className="h-[420px] xl:h-[440px] flex-2">
          <Link href="https://burningdaily.com/collections/flower-pre-rolls">
            <img
              className="h-full w-full object-cover"
              src="https://cdn.shopify.com/s/files/1/0656/3826/9187/files/BD-2024-THCA_PR_Flower_Web.jpg?v=1731690654"
              alt="thca flower"
            />
          </Link>
        </div>
        <div className="h-[420px] xl:h-[440px] w-1/4">
          <Link href="https://burningdaily.com/collections/delta-munchies?sort_by=created-descending&filter.v.price.gte=&filter.v.price.lte=">
            <img
              className=" w-full h-full object-cover object-center lg:object-left-bottom"
              src="https://cdn.shopify.com/s/files/1/0656/3826/9187/files/BD-Lil_Ripper_Email.jpg?v=1744820340"
              alt="munchies"
            />
          </Link>
        </div>
      </div>
      {
        <div className="flex gap-[5px] p-[5px] 2xl:p-4 2xl:hidden bg-[#f5f5f5] w-[100%] flex-col">
          <div className="w-full">
            <Link href="https://burningdaily.com/collections/flower-pre-rolls">
              <img
                className="h-full w-full object-cover"
                src="https://cdn.shopify.com/s/files/1/0656/3826/9187/files/BD-2024-THCA_PR_Flower_Web.jpg?v=1731690654"
                alt="thca flower"
              />
            </Link>
          </div>
          <div className="flex gap-[5px]">
            <div className="w-full">
              <Link href="https://burningdaily.com/collections/litto">
                <img
                  className="object-contain"
                  src="https://cdn.shopify.com/s/files/1/0656/3826/9187/files/BD-2024-LITTO_Zooted_Mobile_72e0dc63-f648-4e5b-abee-20b12e5eadac.jpg?v=1737134076"
                  alt="litto all-in-one"
                />
              </Link>
            </div>
            <div className="w-full">
              <Link href="https://burningdaily.com/collections/delta-munchies?sort_by=created-descending&filter.v.price.gte=&filter.v.price.lte=">
                <img
                  className="object-contain"
                  src="https://cdn.shopify.com/s/files/1/0656/3826/9187/files/BD-Lil_Ripper_Email.jpg?v=1744820340"
                  alt="munchies"
                />
              </Link>
            </div>
          </div>
        </div>
      }

      <Icons />

      <NewArrival />

      <Flavor />

      <Deals />

      <Subscribe />
    </main>
  );
}
