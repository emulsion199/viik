type className = string | undefined;
export const cc = (...classNames: className[]) => {
   if (typeof classNames == 'string') {
      return classNames;
   }
   const name = classNames.reduce((prev, it) => {
      if (!it) return prev;
      prev.push(it);
      return prev;
   }, new Array<string>());
   return name.join(' ');
};

export function getNumberText(text: string, limit = NaN) {
   if (!text) return '';
   const num = text.replace(/[^0-9]/g, '');
   if (limit > 0 && num.length > limit) {
      return num.slice(0, limit);
   }

   return num;
}
export function formatPhone(phone: string, separator = '-') {
   phone = getNumberText(phone, 11);

   if (phone.length < 4) {
      return phone;
   }

   return [phone.slice(0, 3), phone.slice(3, 7), phone.slice(7)].filter(Boolean).join(separator);
}

export function formatNumber(value: number, options: Intl.NumberFormatOptions = {}, locale = 'en-US') {
   if (Number.isNaN(value)) {
      return '-';
   }

   // Ignore -0 value
   const next = value === 0 ? 0 : value;
   return new Intl.NumberFormat(locale, options).format(next);
}
