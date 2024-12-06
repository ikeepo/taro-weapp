# hook

### `import type {AppDispatch, RootState} from '@/store/index';`

##### import type

导入类型，而不是数据；  
AppDispatch 本来就是类型，这里 import type 只是显示表明其是类型，但如果 AppDispatch 本身是函数，import type 的作用就是只导入其类型，不导入实际值；

### `export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector`

##### TypedUseSelectorHook

Redux-Toolkit 对 React-Redux 中 JS 版本的 useSelector 进行的 TS 封装；
