import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Product} from "../model/Product";
import {NgxGalleryImage, NgxGalleryOptions} from "ngx-gallery";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];


  constructor(@Inject(MAT_DIALOG_DATA) public product: Product) {
    this.galleryOptions = [
    {
      'imageArrows': true,
      'imageSwipe': false,
      'thumbnailsArrows': true,
      'thumbnailsSwipe': false,
      'previewSwipe': true,
      'thumbnailsMargin': 0,
      'thumbnailMargin': 0,
      'thumbnailsColumns': 6,
      'width': '100%',
      'height': '450px',
      'previewZoom':true,

    },
    {
      'imageArrows': true,
      'imageSwipe': false,
      'thumbnailsArrows': true,
      'thumbnailsSwipe': false,
      'previewSwipe': true,
      'thumbnailsMargin': 0,
      'thumbnailMargin': 0,
      'thumbnailsColumns': 6,
      'width': '100%',
      'height': '450px',
      'previewZoom':true,

    },
  ];

    this.galleryImages = [];

    //set the first image in gallery to be the base one
    this.galleryImages[0]={
      small: this.product.productPhotoLink,
      big: this.product.productPhotoLink,
      medium: this.product.productPhotoLink
    };

    for(let i=0;i<this.product.imageList.length;i++){
      this.galleryImages[i+1] ={
        small: this.product.imageList[i],
        big: this.product.imageList[i],
        medium:  this.product.imageList[i]
      }
    }
  }


  ngOnInit(): void {
  }


}
