import { Injectable } from '@angular/core';
import {ThingComponent, Thing} from './thing/thing.component';

@Injectable({
  providedIn: 'root'
})
export class ThingService {
  things : Thing[] = [{
        url: 'bagger-288',
        typeUrl: 'largest-things',
        name: 'Bagger 288',
        about:'Bagger 288 (Excavator 288), built by the German company Krupp for the energy and mining firm Rheinbraun, is a bucket-wheel excavator or mobile strip mining machine.',
        imageUrl:'./assets/bgr.jpg'
      },{
        url: 'antonov-an-225-mriya',
        typeUrl: 'largest-things',
        name: 'Antonov An-225 Mriya',
        about:'Antonov An-225 Mriya -- the largest aircraft by weight, length and wingspan. The six-engined Antonov An-225 is literally in a category of its own, holding the titles of both the heaviest aircraft ever built and the largest wingspan of an aircraft currently in service.',
        imageUrl:'./assets/rpln.jpg'
      },{
        url: 'symphony-of-the-seas',
        typeUrl: 'largest-things',
        name: 'Symphony Of the Seas',
        about:'Symphony of the Seas is an Oasis-class cruise ship owned and operated by Royal Caribbean International.[8] She was built in 2018 in the Chantiers de l Atlantique shipyard in Saint-Nazaire, France,[9] the fourth in Royal Caribbean s Oasis class of cruise ships.[10] At 228,081 GT, she is the largest cruise ship in the world by gross tonnage, surpassing her sister ship Harmony of the Seas, also owned by Royal Caribbean International.',
        imageUrl:'./assets/spmh.jpg'
      },{
        url: 'pee-p50',
        typeUrl: 'smallest-things',
        name: 'Peel P50',
        about:'The Peel P50 is a three-wheeled microcar originally made from 1962 to 1965 by the Peel Engineering Company on the Isle of Man. It was listed in the 2010 Guinness World Records as the smallest production car ever made.[3] The original model has no reverse gear, but a handle at the rear allows the very lightweight car to be manoeuvred physically when required.',
        imageUrl:'./assets/p.jpg'
        },{
        url: 'starr-bumble-bee-ii',
        typeUrl: 'smallest-things',
        name: 'Starr Bumble Bee II',
        about:'The Starr Bumble Bee was an experimental aircraft designed and built specifically to acquire the title of “The World’s Smallest Airplane”.',
        imageUrl:'./assets/b.jpg'
      },{
        url: 'boomin-beaver',
        typeUrl: 'smallest-things',
        name: 'Boomin Beaver',
        about:'At just 19 feet long, the boat is actually “Boomin Beaver” security tug. Originally built to herd logs in waterways, the Navy boat is now an all-purpose vessel that can tow small ships and deploy floating security fences, ensuring that larger submarines, destroyers, and even aircraft carriers don’t receive unwanted visitors.',
        imageUrl:'./assets/sshp.jpg'
      }];

  constructor() { }

  getThingByName(url){
    return this.things.find(t => t.url == url);
  }

  getThings(){
    return this.things;
  }
}
