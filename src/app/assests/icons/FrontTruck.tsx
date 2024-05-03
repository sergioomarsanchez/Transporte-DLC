const FrontTruck = ({
  className,
  color,
}: {
  className: string;
  color: string;
}) => (
  <svg
    fill={color}
    className={className}
    viewBox="-1.5 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m10.449 0c-3.64 0-6.71.201-7.168.468-.8.273-1.402 2.09-1.404 4.246v1.071h-.218c-.024-.052-.053-.096-.088-.135.091-.105.146-.242.146-.392 0-.003 0-.006 0-.008v-.536c.002-.015.002-.031.002-.048 0-.25-.187-.457-.429-.487h-.002-.856c-.244.031-.431.237-.431.488 0 .017.001.034.003.051v-.002.536.008c0 .15.055.288.146.393l-.001-.001c-.091.105-.146.242-.146.392v.008 2.678c-.002.015-.002.031-.002.048 0 .25.187.457.429.487h.002.857c.169-.009.31-.116.369-.265l.001-.003h.218v4.822c0 .191.205.368.536.463v.626c-.473.061-.8.274-.8.518v5.36c-.002.043-.004.094-.004.145 0 .64.202 1.232.546 1.718l-.006-.009v.921c0 .243.197.44.44.44h1.798c.243 0 .44-.197.44-.44v-.631h11.247v.631c0 .243.197.44.44.44h1.798c.243 0 .44-.197.44-.44v-.92c.337-.476.54-1.069.54-1.708 0-.051-.001-.101-.004-.152v.007-5.36c0-.244-.331-.457-.8-.518v-.626c.331-.095.535-.272.536-.463v-4.82h.218c.06.152.202.259.369.268h.001.854c.244-.031.431-.237.431-.488 0-.017-.001-.034-.003-.051v.002-2.678c0-.002 0-.005 0-.008 0-.15-.055-.288-.146-.393l.001.001c.091-.105.146-.242.146-.392 0-.003 0-.006 0-.008v-.534c.002-.015.002-.031.002-.048 0-.25-.187-.457-.429-.487h-.002-.857c-.244.031-.431.237-.431.488 0 .017.001.034.003.051v-.002.536.008c0 .15.055.288.146.393l-.001-.001c-.035.039-.064.083-.087.131l-.001.003h-.218v-1.076c0-2.167-.608-3.992-1.414-4.251-.49-.266-3.545-.463-7.157-.463zm-7.348 3.107h14.695c.259 0 .475.184.525.429l.001.003c.102.51.16 1.097.16 1.698v.038-.002 3.727c0 .296-.24.536-.536.536h-14.997c-.296 0-.536-.24-.536-.536v-3.726c0-.011 0-.023 0-.036 0-.601.058-1.188.169-1.756l-.009.057c.05-.248.266-.432.526-.432zm.651 11.786h1.148c.143 0 .259.112.267.253v.001l.191 3.482v.014c0 .148-.12.268-.268.268h-1.338c-.148 0-.268-.12-.268-.268v-3.482c0-.148.12-.268.268-.268zm12.245 0h1.148c.148 0 .268.12.268.268v3.479c0 .148-.12.268-.268.268h-1.339c-.148 0-.268-.12-.268-.268 0-.005 0-.01 0-.015v.001l.191-3.482c.01-.14.126-.25.267-.25h.001zm-9.968.64h8.84c.074 0 .134.06.134.134v.16c0 .074-.06.134-.134.134h-8.84c-.074 0-.134-.06-.134-.134v-.16c0-.074.06-.134.134-.134zm.053.964h8.733c.074 0 .134.06.134.134v.16c0 .074-.06.134-.134.134h-8.733c-.074 0-.134-.06-.134-.134v-.16c0-.074.06-.134.134-.134zm.054.964h8.626c.074 0 .134.06.134.134v.16c0 .074-.06.134-.134.134h-8.626c-.072 0-.13-.057-.133-.128v-.16c0-.074.06-.134.134-.134zm.054.964h8.518c.074 0 .134.06.134.134v.16c0 .074-.06.134-.134.134h-8.518c-.074 0-.134-.06-.134-.134v-.16c0-.074.06-.134.134-.134z" />
  </svg>
);
export default FrontTruck