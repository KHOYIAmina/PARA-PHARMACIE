import React from 'react';
import { TERipple } from 'tw-elements-react';

const Blog = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex items-center justify-center my-8">
        <div className="border-t border-gray-600 flex-grow"></div>
        <div className="mx-4 font-bold font-title text-3xl text-lime-900 md:italic">BLOG</div>
        <div className="border-t border-gray-600 flex-grow"></div>
      </div>
      <div className='relative flex my-1 mx-auto'>
        <div className=" p-4">
          <div className="rounded-l-lg bg-slate-300 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 max-w-md">
            <TERipple>
              <div className="p-6">
                <h5 className="mb-2 text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-center">
                  Protection Solaire
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 text-center">
                  C’est Quoi La Protection Solaire ? Une protection solaire permet donc de limiter les problèmes de peaux liés à une trop forte exposition au soleil.
                </p>
                {/* Autres informations et bouton */}
              </div>
            </TERipple>
          </div>
        </div>
        <div className=" p-4">
          <div className="rounded-l-lg bg-slate-300 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 max-w-md">
            <TERipple>
              <div className="p-6">
                <h5 className="mb-2 text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-center">
                Ma Routine Anti-Taches
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 text-center">
                  Les taches brunes ou taches de vieillesse, qu’est-ce que c’est ?  <br />
              Les taches brunes sont également appelées taches de vieillesse, bien qu’elles ne soient pas directement liées à l’âge, taches de soleil ou lentigo.
              
                </p>
                {/* Autres informations et bouton */}
              </div>
            </TERipple>
          </div>
        </div>
        <div className=" p-4">
          <div className="rounded-l-lg bg-slate-300 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 max-w-md">
            <TERipple>
              <div className="p-6">
                <h5 className="mb-2 text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-center">
                Routine Capillaire Anti-Chute
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 text-center">
                Lorsque les cheveux tombent en quantité anormalement élevée, divers facteurs peuvent être en cause. Si l’alopécie androgénétique est la plus fréquente des chutes de cheveux, d’autres formes existent, passagères ou durables, étendues ou localisées. Dans tous les cas, un diagnostic rapide est nécessaire pour, le cas échéant, mettre en place un traitement adapté qui favorisera la repousse de la chevelure.</p>
                
                {/* Autres informations et bouton */}
              </div>
            </TERipple>
          </div>
        </div>
      </div>
      {/* Carte "Protection Solaire" */}

    </div>
  );
};

export default Blog;
