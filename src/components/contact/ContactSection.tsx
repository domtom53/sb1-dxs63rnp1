import React from 'react';
import Section from '../shared/Section';
import SectionTitle from '../shared/SectionTitle';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <Section id="contact" className="bg-gray-50">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <SectionTitle>Contact</SectionTitle>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-gray-600 mt-1" />
              <div>
                <h3 className="font-medium mb-1">Adresse</h3>
                <p className="text-gray-600">
                   62 Bis Bd Pasteur<br />
                  94260 Fresnes, France
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-gray-600 mt-1" />
              <div>
                <h3 className="font-medium mb-1">Téléphone</h3>
                <p className="text-gray-600">+33 (0)1 23 45 67 89</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-gray-600 mt-1" />
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-gray-600">dveritas@hotmail.fr</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-gray-600 mt-1" />
              <div>
                <h3 className="font-medium mb-1">Horaires d'ouverture</h3>
                <p className="text-gray-600">
                  Mardi - Samedi : 12h00 - 14h30 | 19h00 - 22h30<br />
                  Dimanche - Lundi : Fermé
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[400px] rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.ch/maps/place/Centre+P%C3%A9nitentiaire+de+Fresnes/@48.7653381,2.3178895,17z/data=!3m1!4b1!4m6!3m5!1s0x47e67758c68a8cf3:0xbdcdcb251ab2fb6c!8m2!3d48.7653381!4d2.3204644!16zL20vMDFfZGx2?hl=fr&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;