import React from "react";
import { ArrowUpRight } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="flex items-center text-[#ADFF00] text-xl mb-6">
          <ArrowUpRight className="mr-2" />
          Who is Jesus?
        </h2>
        <p className="text-3xl font-light leading-relaxed">
          Jesus Christ, the central figure of Christianity, is a paradox of divine and human nature. As the Son of God, He is eternal, omnipotent, and omniscient, possessing the attributes of the divine. Yet, He is also fully human, born of a woman, subject to the limitations and experiences of human life. This unique duality of His nature has been a source of profound contemplation and theological debate for centuries.

          Christ's life and teachings are recorded in the New Testament of the Bible. He is depicted as a compassionate and merciful figure, healing the sick, casting out demons, and teaching profound spiritual truths. His message of love, forgiveness, and salvation has resonated with people across cultures and time periods.
        </p>
        <div className="h-40"></div>

        <h2 id="our-vision" className="flex items-center text-[#ADFF00] text-xl mb-6">
          <ArrowUpRight className="mr-2" />
          The Necessity of the Crucifixation.
        </h2>
        <p className="text-3xl font-light leading-relaxed">
          The crucifixion of Jesus Christ is a pivotal event in Christian theology, representing the ultimate expression of God's love for humanity. It is a complex concept, rooted in the belief that Jesus' death on the cross was necessary for the salvation of humankind from sin.

          Central to the Christian understanding of the crucifixion is the concept of original sin, inherited by humanity from Adam and Eve. This sinful nature separates individuals from God, leading to a state of spiritual death. The crucifixion is seen as a means of reconciling humanity with God, a divine sacrifice that atones for our sins.

          The idea of substitutionary atonement is central to the understanding of the crucifixion. It posits that Jesus Christ, being divine, took upon himself the punishment for humanity's sins. His innocent suffering and death serve as a substitute for our own. This concept is often illustrated by the image of a lamb being sacrificed in place of a sinner.
        </p>
      </div>
    </div>
  );
}
