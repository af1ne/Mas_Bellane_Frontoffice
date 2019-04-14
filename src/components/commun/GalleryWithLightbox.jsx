import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import isMobile from '../../services/isMobile';
import { colors } from '../StyledComponents';

import cover from '../../assets/images/photos/cover.jpg';
import food from '../../assets/images/photos/food-min.png';
import champ from '../../assets/images/photos/background-menu.jpg';
import chloeAure from '../../assets/images/photos/chloeAure.jpg';
import facadeRosier from '../../assets/images/photos/facadeRosier.jpg';
import jaccuzzi from '../../assets/images/photos/jaccuzzi.jpg';
import pignon from '../../assets/images/photos/pignon.jpg';
import porsh from '../../assets/images/photos/porsh.jpg';
import atelier from '../../assets/images/photos/atelier.jpg';

const photos = [
  {
    src: facadeRosier,
    width: 3,
    height: 4,
  },
  {
    src: cover,
    width: 4,
    height: 3,
    alt: 'Le patio',
  },
  {
    src: food,
    width: 8,
    height: 4,
    alt: 'A table !',
  },
  {
    src: porsh,
    width: 2,
    height: 3,
  },
  {
    src: jaccuzzi,
    width: 2,
    height: 3,
  },
  {
    src: chloeAure,
    width: 3,
    height: 2,
    alt: 'Cloé et Auré',
  },
  {
    src: pignon,
    width: 2,
    height: 3,
  },
  {
    src: champ,
    width: 4,
    height: 3,
    alt: 'Le champ : agriculture biologique de fruits rouges',
  },
  {
    src: atelier,
    width: 25,
    height: 9,
  },
];

class GalleryWithLightbox extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious() {
    const { currentImage } = this.state;
    this.setState({
      currentImage: currentImage - 1,
    });
  }

  gotoNext() {
    const { currentImage } = this.state;
    this.setState({
      currentImage: currentImage + 1,
    });
  }

  render() {
    const { currentImage, lightboxIsOpen } = this.state;
    return (
      <div>
        <Gallery
          photos={photos}
          onClick={this.openLightbox}
          columns={isMobile() ? 2 : 4}
          margin={4}
        />
        <Lightbox
          theme={{ container: { background: colors.backgroundFilter } }}
          images={photos.map(x => ({
            ...x,
            srcset: x.srcSet,
            caption: x.alt
          }))}
          backdropClosesModal
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={currentImage}
          isOpen={lightboxIsOpen}
          width={1600}
        />
      </div>
    );
  }
}

export default GalleryWithLightbox;
