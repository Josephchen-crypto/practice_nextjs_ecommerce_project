import { Clock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

interface ContactItemData {
  title: string;
  subTitle: string;
  icon: React.ReactNode;
}

const data: ContactItemData[] = [
  {
    title: "Visit Us",
    subTitle: "123 Street, New York, USA",
    icon: (
      <MapPin className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Call Us",
    subTitle: "+012 345 67890",
    icon: (
      <Phone className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Working Hours",
    subTitle: "Mon - Sat: 9AM - 5PM",
    icon: (
      <Clock className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Email Us",
    subTitle: "info@example.com",
    icon: (
      <Mail className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
];

const FooterTop = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-b">
      {data?.map((item, index) => (
        <ContactItem
          key={index}
          title={item.title}
          subTitle={item.subTitle}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

const ContactItem = ({ title, subTitle, icon }: ContactItemData) => {
  return (
    <div>
      <div className="flex justify-center items-center gap-3 group hover:bg-gray-50 transition-colors hoverEffect py-5">
        {icon}
        <div>
          <h3 className="font-semibold text-gray-900 group-hover:text-black hoverEffect">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-900 hoverEffect">
            {subTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
