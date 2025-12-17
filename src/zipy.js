import zipy from 'zipyai';

export const initZipy = () => {
  if (typeof window !== 'undefined') {
    zipy.init('3c20cba3');
  }
};
