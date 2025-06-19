'use client';

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
} from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
const socialIcons = [
  { icon: <Facebook className="h-5 w-5" />, label: 'Facebook', href: '#' },
  { icon: <Instagram className="h-5 w-5" />, label: 'Instagram', href: '#' },
  { icon: <Linkedin className="h-5 w-5" />, label: 'LinkedIn', href: '#' },
  { icon: <FaTiktok className="h-5 w-5" />, label: 'TikTok', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#fdf6fa] text-sm text-gray-700 mt-16 pt-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          {/* Mailing List */}
          <div className="flex-1">
            <h3 className="text-[#e81c78] font-semibold mb-2">Join our mailing list</h3>
            <p className="mb-4">Be the first to hear about the latest products, projects and inspirations.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded px-4 py-2 w-full max-w-xs"
              />
              <button className="bg-[#e81c78] text-white px-4 py-2 rounded">Subscribe</button>
            </form>
            <div className="mt-2">
              <input type="checkbox" id="consent" className="mr-2" />
              <label htmlFor="consent">
                I consent to receiving newsletters and updates from Finance Hub in accordance with their{' '}
                <a href="#" className="underline">Privacy Policy</a>.
              </label>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Follow Us</h4>
              {socialIcons.map(({ icon, label, href }) => (
                <a key={label} href={href} className="flex items-center gap-2 hover:text-[#e81c78] mb-1">
                  {icon}
                  {label}
                </a>
              ))}
            </div>
            <div>
              <h4 className="font-semibold mb-2">About Us</h4>
              <ul className="space-y-1">
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Help</h4>
              <ul className="space-y-1">
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Policies</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Pay with</h4>
              <div className="flex gap-2">
                {/* <img src="/images/visa.png" alt="Visa" className="h-6" />
                <img src="/images/mastercard.png" alt="MasterCard" className="h-6" />
                <img src="/images/paypal.png" alt="PayPal" className="h-6" /> */}
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-pink-100" />
        <p className="text-center text-xs text-gray-500 pb-6">© 2025 Finance Hub. All rights reserved.</p>
      </div>
    </footer>
  );
}