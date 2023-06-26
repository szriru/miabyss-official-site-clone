import { createContext, Dispatch, SetStateAction } from 'react';

interface Mytype {
  cover: 1 | 2 | 3
  setCover: Dispatch<SetStateAction<1 | 2 | 3>>
}
const CoverContext = createContext<Mytype | {
  cover: null,
  setCover: null
}>({
  cover: null,
  setCover: null
});

export default CoverContext;