import { Extent } from './extent';
import ImageBase from './ImageBase';
import ImageState from './ImageState';

export default class ImageWrapper extends ImageBase {
    constructor(extent: Extent, resolution: number, pixelRatio: number, src: string, crossOrigin: string, imageLoadFunction: LoadFunction);
    protected state: ImageState;
    setImage(image: HTMLCanvasElement | HTMLImageElement | HTMLVideoElement): void;
}
export type LoadFunction = ((param0: ImageWrapper, param1: string) => void);
