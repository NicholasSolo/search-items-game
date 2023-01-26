<template>
  <div :class="['share']">
    <h4 :class="['title']">Поделитесь игрой с друзьями</h4>

    <ul class="icons">
      <li v-for="(item, ind) in social" :key="ind" class="social-item">
        <a :href="item.link" target="_blank">
          <img :src="item.img" :alt="item.name" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const URL = window.location.href;

const ogTitle = 'Поиск предметов';
const ogDescription = 'Я нашел все предметы, а ты сможешь?. Присоединяйся к игре!';
const ogImage = `${URL}/favicon.png`;

const social = [
  {
    name: 'Whatsapp',
    img: '/assets/img/footer/wa.svg',
    link: `https://api.whatsapp.com/send?&text=${URL + ' ' + ogDescription}`,
  },
  {
    name: 'Telegram',
    img: '/assets/img/footer/tg.svg',
    link: encodeURI(`https://t.me/share/url?url=${URL}&text=${ogDescription}`),
  },
  {
    name: 'VK',
    img: '/assets/img/footer/vk.svg',
    link: encodeURI(
      `https://vk.com/share.php?url=${URL}&title=${ogTitle}&description=${ogDescription}&image=${ogImage}&noparse=false`
    ),
  },
  {
    name: 'OK',
    img: '/assets/img/footer/ok.svg',
    link: encodeURI(
      `https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=${URL}&st.comments=${ogTitle}`
    ),
  },
];
</script>

<style scoped lang="scss">
.share {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 230px;

  .title {
    margin-bottom: 15px;
    font-size: 16px;
    line-height: 24px;
    color: #8e8e8e;
  }

  &._copy {
    .title {
      margin-bottom: 5px;
    }
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
}

@media screen and (max-width: 1030px) {
  .share {
    .title {
      margin-bottom: 6px;
    }

    .icons {
      .social-item {
        a {
          img {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 700px) {
  .share {
    .title {
      margin-bottom: 15px;
      font-size: 12px;
      line-height: 20px;
      color: #8e8e8e;
    }

    .icons {
      .social-item {
        a {
          img {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
}

@media (max-width: 900px) and (orientation: landscape) {
  .share {
    .title {
      margin-bottom: 5px;
      font-size: 12px;
      line-height: 16px;
    }

    .icons {
      .social-item {
        a {
          img {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .share {
    .title {
      margin-bottom: 8px;
      font-size: 12px;
      line-height: 16px;
    }
  }
}
</style>
