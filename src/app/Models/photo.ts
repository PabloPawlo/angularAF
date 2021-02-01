import { Byte } from "@angular/compiler/src/util";
import { PhotoPurposeEnum } from "./Enums/photo-purpose-enum";
import { PhotoAlbum } from "./photo-album";

export class Photo{
    id: number;
    code:  Array<Byte>;
    albumId: PhotoAlbum;
    comment: string;
    photoPurposeEnum: PhotoPurposeEnum;

}