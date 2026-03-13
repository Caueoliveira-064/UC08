import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

const locations = [
  {
    name: 'Eixão do Lazer',
    desc: 'O ponto de encontro tradicional de domingo. Pistas largas e planas perfeitas para patinar.',
    img: 'https://images.unsplash.com/photo-1596431110903-f326588258e7?q=80&w=1000&auto=format&fit=crop',
    distance: 'Ponto Central'
  },
  {
    name: 'Parque da Cidade',
    desc: 'Caminhos arborizados e ciclovias extensas em um dos maiores parques urbanos do mundo.',
    img: 'https://images.unsplash.com/photo-1610410492837-76906a589254?q=80&w=1000&auto=format&fit=crop',
    distance: 'Asa Sul'
  },
  {
    name: 'Pontão do Lago Sul',
    desc: 'Um visual incrível ao pôr do sol com brisa constante e as melhores vistas da Ponte JK.',
    img: 'https://images.unsplash.com/photo-1627838505511-fd68fac25700?q=80&w=1000&auto=format&fit=crop',
    distance: 'Lago Sul'
  }
];

const Locations = () => {
  return (
    <section id="locais" className="section-padding">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Onde Rodar em BSB</span>
            <h2 className="text-4xl md:text-5xl">Os Melhores Spots da <span className="text-primary italic">Capital</span>.</h2>
          </div>
          <button className="text-text font-bold flex items-center gap-2 hover:text-primary transition-colors border-b-2 border-primary pb-1">
            Ver Mapa Completo
            <Navigation size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((loc, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[400px] mb-6 overflow-hidden rounded-[32px]">
                <img 
                  src={loc.img} 
                  alt={loc.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <MapPin size={16} />
                    <span className="text-sm font-bold">{loc.distance}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{loc.name}</h3>
                </div>
              </div>
              <p className="text-text-muted px-2">
                {loc.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
