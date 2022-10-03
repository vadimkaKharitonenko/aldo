import React, {FC} from 'react';
import {SvgXml} from 'react-native-svg';

type Icon = {
  opacity?: string;
  color?: string;
};

const LogoIcon = () => {
  return (
    <SvgXml
      width={182}
      height={34}
      xml={`<svg width="182" height="34" viewBox="0 0 182 34" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <rect width="182" height="33.2348" fill="url(#pattern0)"/>
      <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use xlink:href="#image0_1_1223" transform="translate(0 -0.00654755) scale(0.0025 0.0136905)"/>
      </pattern>
      <image id="image0_1_1223" width="400" height="74" xlink:href="data:image/png;base64,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"/>
      </defs>
      </svg>
      `}
    />
  );
};

const LogoSmallIcon = () => {
  return (
    <SvgXml
      width={104}
      height={19}
      xml={`
      <svg width="104" height="19" viewBox="0 0 104 19" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <rect width="104" height="19" fill="url(#pattern0)"/>
      <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use xlink:href="#image0_1_1030" transform="translate(0 -0.00631579) scale(0.0025 0.0136842)"/>
      </pattern>
      <image id="image0_1_1030" width="400" height="74" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAABKCAYAAACVbQIxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABBvSURBVHic7Z13lJXVEcB/yy6wNFl6R4MFEUGjWGOJEARLgg01mkI0MSpC8NhyLMkLYsEWYsmxRI3GFmPsGNBgi4eIBtBEREVRI0SFSF1gWdjd/DH7Dptld99X5n7tze+cORzgvfvNne99d747d+7cEoLTo/7Plc38f19gfb1Exdfq//w4wmsahmH0BYYDuwD9gP7AQKA3UAZUAKVA50bfqwPWAFuRsbIKWF4v/waWAUuAt4HVrjvhl5K4FVCkDHgV6dOhyA0xDC3aAeVxK+GTamBD3EpkkI7AYcDhwD7AXmx7oXbJp8BbwALgRWAesCWC6xYF0xBvXgdcFbMuUfM02/oeVHJRK50ycoS3cVxSBawCPgBeAf4ATAcmAaOA7npmyizDgV8gL6nVxH9P65AZy7PAFGS2YwTkCKCGbYatqf+3YsEciHtyxD9guJTlwF+AqcjbdRsVq6WbXYArgEXEf38KSS3wN+BcopkNZYZuSJywsUGXUTxvVuZA3JMj/kEiSqkEZgKTkfh+sdAKGAe8RPz3IKhsAR4BDlC2TeYoAZ6keUM+TbbWeZrDHIh7csQ/MMQlW4EXgAnADuHMmFjaA+chC9Zx21tT5gInIY7RaMREChvwvNi0iw5zIO7JEf9gkASpAu4HdgtlzeTQChiPZG7GbVuX8g5wrJLNMsGewCYKG24TsgCWZcyBuCdH/INAkmQL8DDpfrbGAP8kfltGKbOAYRrGg/ROa8qBB/GWVlmO/NDbO9XIMIqLMuBUYCEyI+kdrzq+6AzcgfJgmhLGIGnA16KQKJFWB3IT/t589gBmONLFMIqZVsD3gfeBixDHkmTGIllVZ8WtSIyUAZcg6yNDY9Ylco4j+PTtpBj0jQILYbknR/zhhzTIXGBQMBM7pRS4Hkl3jdtGSZJNSHJEINI2A+kP3B3i+3diG24MwyUHIbulJ8SsR0MqkA13F1IcWZl+KAfuRaI6pX6/nCYHUgo8AHQN0UYXZO0k6dNsw0gznZBB6RYCDErKDAZeR0JXRvOcDzyHOFvPpMmBXIrUngnLIcDlCu0YhtEy5yGbETvFdP3dgZcRJ2IU5khkA2U3r19IiwM5GKlDo8XlSLkGwzDcMgb4K9tXoXXNMKRuVZqyw5LA3simUU9OJA2hnAr0w075cNjeSJE5wzDcsT+S6DEWWbR1zTBgDvHVhNqKZKUtBT4DPkfGma1I6fa6Bp9tjVT3LUdC7AORtd5d2XY8RdR8HXH6o8jA+PgI7jIQHo+wHy6xLCz35Ig/Yybt8iwyYLqkF3KORpT9WouUVJoIjECv7H8FUhT2MqSKctRVgF+kwP1K+gzkDOAUh+0fD5wN3O7wGoaRZwWSpRQF+TdbkHBET2RwHYisDQwBBkSkS55jkGyfSY7ab4u8FEbRr3XAE8BDyEDr4vyhNciaxEvIERWdkEKPpwGjcT9+H4Hsn5vo+DpOGIxUBHXtZTeS/s00NgNxT47wNl4etdIF6IG8RM0APiK6N9sTHPXn7gh0/wA4h/grW/QFrkZCTK77fHZEfVKjLbLdPqof9L+QE+fSijkQ9+QIb+OkOZDG7IPMEPJxeleyGv34/ncd6/wRUrolaYlHHZEQ1zrc9b0KqeaRGm4iOueRl9si6ZkbzIG4J0f2HUieTsi+gP/i7nmbpahvdyQ86ELPDcAFJP+ArZ7IDMzVTvu/E/+eHk8cRXzlBo6LoH8uMAfinhzF40DyVCDhrYanfWrKd5T0fNCRfq8h2VBpYiyS+eXCHlMi7EcgegNfEo/zqEPeuPo776U+5kDck6P4HEiekTR96mdYWYKEq8MwyoFedUgUJOlJRs3RA1nY17ZJJdAnwn74ogSYTXzOIy8vk5KpWgPMgbgnR/E6EIB+wNvoP28/DanXa8r6bAF+GFKnJFCGlKzXvl83RdkJP1xI/M4jL1c47qs25kDck6O4HQjIbnLt5JZFBC9wqD37qCZbFbtLkBCkpo02IOngiWJfYDPxO468bEHKp6QFcyDuyWEOBCTM/DG6z9uRAXV5RVGHWuRckyzyO3Tv1/XRqt8yHZHcao2OvYLej+oTfFamjBFzIO7JYQ4kz8HIxjmtAemxADoMVrx+HTAtgA5poTWyGVHLVitxX1HAM79Hp1OrkV22A9HbXPOou26rYg7EPTnMgTTkevQGpPX4L//xS8XrzyV9655+6QN8hZ7NjopW/aY5Db0Ondqg3fGK7f7YQb+1MQfinhzmQBpSQbwD0mKl626ieMq9n47e/bo/Yt23YxBShEyjM/c10f49Sm1XIrWDkow5EPfkMAfSmKnoDUh+NvIOVbzujAD9TislwBvo2G0tUBbXtvzWyOafHRTaWkrTxdkmAx8qtN8BeJjw+eqGkTXyO5812M/HZw9UuuYm4BqlttJAHRL602AHYI+4HMiv0PkRbAW+h9SBaUwlEtaqVrjO3sB0hXYMI0t8CsxXamso3utM7a90zaeQjcvFxCwki06D/eJwICOBS5TamobUaGmO+eiFZiYDxyq1ZRhZ4QWldtoDO3v87Ailaz6k1E6aqEMiKhpE7kC6I4svGtedi9TIL8R0ZHd5WEqQdZW+Cm0ZRlbQmoGA97pTGmuStUjKfzEyR6mdIVE6kBIkZtpPoa11SOjKyyEutcAPkDTfsPRAzwEaRhZ4X7GtLh4+U47OWRyLaTr0XQy8ic7aVdcoB8KJ6FXfnIi/ON5n6KXjjgIuVmrLMNLOF4pteUmq6ap0La11gDSyHikcG5bIHMhQ4Dqlth4DHgjwvceREJQGVxLd0aSGkWTWK7bV2cNnvMxSvLBKqZ208pVCG5E4kHJksUrjxL9lwFkhvj8ZnSl3GeLEvPzgDSPLaI4hdUqf8ULQAo5ZQaP/tVE4kBnAcIV28sXOwqxlbEB2Y2qk9g4C7lJoxzDSjGa9uLUePqOxlgnQTamdtKLR/1WuHcgJhK/3n+dqdLKp5qO3mWY82Tg7wDCConnAkJdFbS0HspNSO2mkEzprSWtcOpAB6L2hz0PKJmhxHVKdUoNbgd2U2jKMtDFEsS0vzqEK2Khwrd0p3hD0CHSKRzqbgZQiawQaXq4SSdndotBWnnxqr8ZCWkdkjaeNQluGkTa0NvWBHOvghcUK12qFbGouRrT6vdiVA7kMOEypLa2aVo1Zhl5q775IiM0wio2gh0E1phLvqbVvKl3zdKV20kQJUgVdgzeU2vk/voHMFjQqPv7JhYKNuEtJ11pgbAT6NoVV43VPDqvG25gh6FXFfd3Hdc9QumYV0D9Av9PMGPTu2XDtGUgFUmW3TKGtZegtwLfEFLxPnVuiBDkcK3HnBRuGI36i2NY8H5/142xaoi0SLSkmckrtrAMWaTuQO4AdFdrRXKMoxAZkSqeR2tsLOZuk2HPMjezTC10H8qyPz76LzjoIyGxmmFJbSedk9ErhPwnUaMwU8pyJKKjBHGQh/ltK7XnhGeBEhXbGABcANyi0ZRhJZSqSQKLBOvwXNnwEORYiLG2QyMGB6CbqJI2eSMaoFloVfQFJiatEL7aWdtmMbnZKIWwNxD05wts4K2sgRyJRAq3nJchgtJvi9euA3wTQIS2UAc+jZ6sV9W2qlCFoi/wAOii0lRXaIKm9neJWxDCU2RF5Y9cM094R4DsfoLOxOM9k4GzF9pLEzcBoxfbuxVsldE/8mvjf+JMqTZ3V7gKbgbgnR3gbp30G0h1Zf9B8RhaG0Geksi5bgQkh9Eki09G10QYkHKbC0ehOZbMoUeSamwNxT47wNk6zA9kJeA/952NCSL1eVdanBpgUUqckUArcgv79ulFLwd7IecJxD9BJl7V4P6ozKOZA3JMjvI3T6kCOQs790H42FgGtQ+qmPQvJy11IeD6NdAVmo2+TSmTcD00rdBdlsi7zCP+gtIQ5EPfkCG/jtDmQ7sj6hKsog1Zc/gFH+s0nfSm+I4GluLHHz7SUvMiRglmWawNZ2hvmQNyTI7yN0+JAKoCfI8UNXT0Pf1bUtzvuoiGbkerdGsfousS1s5+L0tkvIxCjxjkYp1FqcLevxRyIe3KEt3GSHUgJshfiNuSUQZfPwpdAX2X9T3Gs8zJk06Hm3jkN2iPOfg3u+l6FUtXlTsASh4pmXf4D9PBt9cKYA3FPjvA2TpoD6YWcaXML8AnRPAM16BVgbIxWXbuW5FNko7CX89td0he4Cjnb3HWfmz0F1q83vRXYxed3jG30QXKov43cmCTRBTllsRhYhzx4UVNGdDZug+zNKkPubU9kAXQAsvF3D/RnAV64Blk/dcFEpG+HOGofYCBSZeJK4Cmk9t/z6JRCKkQnYBxSemk00cyGbgXu1GjodKJ5QykGUVuMqkdjBlJMEmTjWi4BeqddHkL3DPWm6InMEqLsVyUwE3muD0JvvaQLMAq4AklXro64X3Mo4KS8erBBwG89ftYozHSk9s9bcStiGBExEzn+udbxdVYAxyCDn9qGtwJ0QPbEHV3/9xrkDKMPkbWT5cgaxWYkrb+hDVojNcXaI8kLOwL9gF2J99jdBUh4s8Ud514cSGvkzSHumF+WyJd/GYHs7DSMLDMHGYyiKlb4DvLmHqUTaUgpMLhe0sgCJERWsBq6l+nkVOCAsBoZ27E72S7gZhgAjwLHApsivu47wOHA5xFfN+0sRJIcPB2lUWgGMgq4OKxG9cxBfkxZ4GTENmE5E3gB+KNCW4aRNK5E9lDUxXT994BvImuEaZ0NRMks4FQkzBaa7kjsTmMx5gvimUq6oid6pR1WEz7WaYvo/sQW0d3KSuD4ADZ2RWfgOeK3S5LlRiT05ovmQlglwD3opPnVAT9CFreywgqkT3UKbVUga0xJ26BkGEGYDQwHnohbkQasRVLnb0Dnmc0SVchYdgGy+K/CJPQ8281aSiWQm9Gz07QQetgMxJ/YDERfvkSOuE36cc5jgM+I315JkDeBoeHMuT17AhuVFFwEtNNWMEG0Bd5Gx1Y1BF9XMQfiT8yB6Ek1kgzSOYBN42IH5DcQt+3ivGfXIptNVWmPDPoaSlYhU9msMxzpq4bNlgHdAuhgDsSfmAMJL5uQHcqujypwyWhkL1bctoxSZuJg1pFH0ytPcaVkAjkf3RvsNwxgDsSfmAMJLmuRGUe/ADZMIq2QPSquSqAnRf6BlHp3xomKys4m+bFQTUrQPcBlos/rmwPxJ+ZA/MlmpO7TeKA8gO3SQDvgXOB94re3prwGnIDj8XgAsnFEQ+GVSNHAYqMP0ncNG27C30E25kD8iTmQwrIKObPjLOSEu2KhFZKxNYf470FQqUYyO/dTtk2TlKJ7rvC4KJROKOPQs+MivBdlMwfiT8yBbC9LkdTbS4H9CbAnIIPsDFyG7GqP+/4UkhpkHD8H2cMXGb9U7MTtUSqeUG4nenuaA/EnxeZANiAzisXIm/V9yFkS5wCHka4MqrgYhlTFfZnkHKi3DngGmIxEkSKnBNgLvU1s7xJ9zZuk0Q45a0GLhRSuYNoRt2euZ43NSKq6H9qRvvh/kH4ahekAHIo4332QMbR3BNddimSNLQBeAt6gQLVc1xTTQrdhGIYreiOOZGckQ20A0L/+39sie0/KkMoTDalFMtuqkZniRraVgF+GbHpcguw3U6lRpcn/AMaXkx+P3k8pAAAAAElFTkSuQmCC"/>
      </defs>
      </svg>      
      `}
    />
  );
};

const FacebookIcon = () => {
  return (
    <SvgXml
      width={8}
      height={15}
      xml={`
      <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.07189 8.47697L8.48589 5.77697H5.89989V4.02797C5.88187 3.82674 5.90928 3.62403 5.9801 3.43481C6.05091 3.24559 6.16333 3.07469 6.30904 2.93474C6.45476 2.79478 6.63005 2.68934 6.82197 2.62621C7.01389 2.56308 7.21754 2.54386 7.41789 2.56997H8.59989V0.271975C7.90727 0.160219 7.2074 0.0993897 6.50589 0.0899746C6.02427 0.0532594 5.54047 0.122912 5.08876 0.293998C4.63706 0.465083 4.22851 0.733414 3.89206 1.07998C3.55561 1.42654 3.29949 1.84286 3.14186 2.29943C2.98422 2.756 2.92893 3.24165 2.97989 3.72197V5.77898H0.608887V8.47897H2.97989V15H5.89989V8.47697H8.07189Z" fill="white"/>
      </svg>      
      `}
    />
  );
};

const TwitterIcon = () => {
  return (
    <SvgXml
      width={18}
      height={14}
      xml={`
      <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.466 3.48901C15.477 3.64201 15.477 3.79501 15.477 3.94801C15.4862 5.27062 15.2324 6.58187 14.7305 7.80557C14.2286 9.02928 13.4885 10.1411 12.5533 11.0763C11.618 12.0115 10.5063 12.7516 9.28256 13.2535C8.05885 13.7554 6.74761 14.0092 5.425 14C3.50164 14.005 1.61779 13.4542 0 12.414C0.283232 12.4453 0.568052 12.46 0.853 12.458C2.44303 12.4622 3.9881 11.9306 5.239 10.949C4.50235 10.935 3.78846 10.6913 3.19689 10.2522C2.60533 9.81296 2.16558 9.20009 1.939 8.49901C2.15964 8.53404 2.3826 8.55243 2.606 8.55401C2.91981 8.55323 3.23227 8.51291 3.536 8.43401C2.7351 8.27284 2.01481 7.8391 1.49773 7.2066C0.980648 6.57411 0.698743 5.78197 0.7 4.96501V4.91901C1.1905 5.19253 1.73878 5.34605 2.3 5.36701C1.54988 4.86796 1.01841 4.10153 0.814002 3.22406C0.609593 2.34659 0.747646 1.42419 1.2 0.645013C2.08704 1.73776 3.19388 2.63183 4.44872 3.26924C5.70356 3.90666 7.07838 4.27317 8.484 4.34501C8.4283 4.07793 8.40015 3.80584 8.4 3.53301C8.40123 2.82467 8.61518 2.13303 9.01411 1.54772C9.41305 0.962398 9.97858 0.510385 10.6374 0.250253C11.2963 -0.00988001 12.0181 -0.0661416 12.7093 0.0887588C13.4004 0.243659 14.0292 0.602581 14.514 1.11901C15.3051 0.966676 16.0637 0.678051 16.756 0.266013C16.491 1.08144 15.9378 1.77227 15.2 2.20901C15.9015 2.12909 16.5871 1.94471 17.234 1.66201C16.7515 2.36604 16.1538 2.98369 15.466 3.48901Z" fill="white"/>
      </svg>      
      `}
    />
  );
};

const GoogleIcon = () => {
  return (
    <SvgXml
      width={15}
      height={16}
      xml={`
      <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.6291 6.722L14.5531 6.401H7.5741V9.355H11.7441C11.5132 10.2599 10.9854 11.0613 10.2451 11.6307C9.50487 12.2002 8.595 12.5049 7.6611 12.496C6.44065 12.4858 5.2683 12.0187 4.3751 11.187C3.93551 10.7543 3.58558 10.2391 3.34535 9.67093C3.10512 9.10278 2.9793 8.49283 2.9751 7.876C2.9925 6.63697 3.48466 5.45185 4.3501 4.565C5.23143 3.73244 6.40178 3.27491 7.6141 3.289C8.6399 3.30327 9.62605 3.6875 10.3911 4.371L12.4911 2.283C11.1323 1.06336 9.37194 0.386965 7.5461 0.383C5.52266 0.371377 3.57716 1.16252 2.1361 2.583C0.7633 4.00546 -0.00235109 5.90614 0.00109723 7.883C-0.0098536 9.81943 0.724942 11.6858 2.0531 13.095C2.79314 13.8344 3.67387 14.418 4.64327 14.8114C5.61266 15.2047 6.65105 15.3997 7.6971 15.385C8.64283 15.3926 9.58022 15.2076 10.4521 14.841C11.3239 14.4745 12.1119 13.9341 12.7681 13.253C14.0566 11.837 14.7537 9.98115 14.7161 8.067C14.7222 7.61708 14.6931 7.16738 14.6291 6.722Z" fill="white"/>
      </svg>      
      `}
    />
  );
};

const AppleIcon = () => {
  return (
    <SvgXml
      width={13}
      height={15}
      xml={`
      <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.27994 3.51099C7.96794 3.51099 7.41294 4.15499 6.49894 4.15499C5.56194 4.15499 4.84694 3.51499 3.71094 3.51499C3.08527 3.55283 2.47877 3.7453 1.94578 4.07515C1.41278 4.405 0.969942 4.86193 0.656938 5.40499C-0.401062 7.08399 -0.222062 10.247 1.49294 12.942C2.10594 13.907 2.92594 14.988 3.99994 15H4.01994C4.95294 15 5.23094 14.371 6.51994 14.363H6.53994C7.80494 14.363 8.05894 14.996 8.98894 14.996H9.00894C10.0829 14.984 10.9459 13.785 11.5589 12.825C11.9316 12.25 12.248 11.6406 12.5039 11.005C11.9282 10.7689 11.4298 10.3766 11.065 9.87248C10.7002 9.36834 10.4834 8.77232 10.4391 8.1516C10.3948 7.53088 10.5248 6.91013 10.8143 6.3593C11.1039 5.80847 11.5415 5.34946 12.0779 5.03399C11.7565 4.58707 11.3387 4.21816 10.8554 3.95453C10.3721 3.69091 9.83572 3.53932 9.28594 3.51099H9.27994Z" fill="white"/>
      <path d="M8.99083 0C8.11755 0.109135 7.32011 0.551202 6.76483 1.234C6.48709 1.55852 6.27926 1.93684 6.15434 2.34531C6.02942 2.75379 5.9901 3.18364 6.03884 3.608H6.10084C6.52824 3.58509 6.94528 3.46785 7.32202 3.2647C7.69875 3.06155 8.02585 2.77752 8.27983 2.433C8.82869 1.74764 9.08427 0.873057 8.99083 0Z" fill="white"/>
      </svg>      
      `}
    />
  );
};

const UserIcon = () => {
  return (
    <SvgXml
      width={15}
      height={16}
      xml={`
      <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.15992 0C6.32548 0 5.50977 0.24744 4.81596 0.71103C4.12215 1.17462 3.5814 1.83354 3.26207 2.60446C2.94274 3.37538 2.8592 4.22368 3.02199 5.04209C3.18478 5.86049 3.5866 6.61225 4.17664 7.20228C4.76667 7.79232 5.51842 8.19414 6.33683 8.35693C7.15524 8.51972 8.00354 8.43617 8.77446 8.11685C9.54538 7.79752 10.2043 7.25676 10.6679 6.56295C11.1315 5.86914 11.3789 5.05344 11.3789 4.219C11.3779 3.10038 10.933 2.02787 10.142 1.23689C9.35105 0.4459 8.27854 0.00105905 7.15992 0V0Z" fill="#333333"/>
      <path d="M14.1119 12.459C13.4932 11.5289 12.654 10.7662 11.6691 10.2391C10.6841 9.71201 9.58405 9.4368 8.46693 9.438H5.85193C4.73481 9.4368 3.63475 9.71201 2.6498 10.2391C1.66485 10.7662 0.825626 11.5289 0.206928 12.459L0.12793 12.577V16H14.1909V12.577L14.1119 12.459Z" fill="#333333"/>
      </svg>      
      `}
    />
  );
};

const PasswordIcon = () => {
  return (
    <SvgXml
      xml={`
      <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 7H11.75V4.75C11.75 3.49022 11.2496 2.28204 10.3588 1.39124C9.46796 0.500445 8.25978 0 7 0C5.74022 0 4.53204 0.500445 3.64124 1.39124C2.75044 2.28204 2.25 3.49022 2.25 4.75V7H1.5C1.10218 7 0.720644 7.15804 0.43934 7.43934C0.158035 7.72064 0 8.10218 0 8.5L0 14.5C0 14.8978 0.158035 15.2794 0.43934 15.5607C0.720644 15.842 1.10218 16 1.5 16H12.5C12.8978 16 13.2794 15.842 13.5607 15.5607C13.842 15.2794 14 14.8978 14 14.5V8.5C14 8.10218 13.842 7.72064 13.5607 7.43934C13.2794 7.15804 12.8978 7 12.5 7ZM9.25 7H4.75V4.75C4.75 4.15326 4.98705 3.58097 5.40901 3.15901C5.83097 2.73705 6.40326 2.5 7 2.5C7.59674 2.5 8.16903 2.73705 8.59099 3.15901C9.01295 3.58097 9.25 4.15326 9.25 4.75V7Z" fill="#333333"/>
      </svg>      
      `}
    />
  );
};

const BurgerIcon = () => {
  return (
    <SvgXml
      width={24}
      height={20}
      xml={`
      <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 9.754H23" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M1 1H23" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M1 18.508H23" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>      
      `}
    />
  );
};

const CartIcon = () => {
  return (
    <SvgXml
      width={26}
      height={25}
      xml={`
      <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.137 21.5C11.145 21.6993 11.0932 21.8964 10.9883 22.0661C10.8834 22.2357 10.7301 22.3701 10.5482 22.4519C10.3664 22.5338 10.1641 22.5594 9.96761 22.5254C9.77107 22.4915 9.58917 22.3995 9.44529 22.2614C9.3014 22.1233 9.20211 21.9453 9.16017 21.7503C9.11824 21.5553 9.13556 21.3522 9.20993 21.1671C9.2843 20.9821 9.41231 20.8235 9.57752 20.7117C9.74272 20.6 9.93757 20.5402 10.137 20.54C10.3969 20.5349 10.6481 20.6332 10.8356 20.8131C11.0231 20.9931 11.1315 21.2402 11.137 21.5V21.5Z" stroke="#333333" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M22.137 21.5C22.145 21.6993 22.0932 21.8964 21.9883 22.0661C21.8834 22.2357 21.7301 22.3701 21.5482 22.4519C21.3664 22.5338 21.1641 22.5594 20.9676 22.5254C20.7711 22.4915 20.5892 22.3995 20.4453 22.2614C20.3014 22.1233 20.2021 21.9453 20.1602 21.7503C20.1182 21.5553 20.1356 21.3522 20.2099 21.1671C20.2843 20.9821 20.4123 20.8235 20.5775 20.7117C20.7427 20.6 20.9376 20.5402 21.137 20.54C21.3969 20.5349 21.6481 20.6332 21.8356 20.8131C22.0231 20.9931 22.1315 21.2402 22.137 21.5V21.5Z" stroke="#333333" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2.13696 1.54001H6.13696L8.81696 14.93C8.90841 15.3904 9.15887 15.804 9.52451 16.0983C9.89015 16.3926 10.3477 16.549 10.817 16.54H20.537C21.0063 16.549 21.4638 16.3926 21.8294 16.0983C22.1951 15.804 22.4455 15.3904 22.537 14.93L24.137 6.54001H7.13696" stroke="#333333" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `}
    />
  );
};

const FilterIcon = () => {
  return (
    <SvgXml
      width={14}
      height={17}
      xml={`
      <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.2452 0.759786H0.724221C0.592089 0.75992 0.462521 0.79626 0.349593 0.864859C0.236664 0.933458 0.144693 1.03169 0.083672 1.14889C0.0226511 1.26609 -0.00508735 1.39777 0.00347183 1.52962C0.012031 1.66147 0.0565612 1.78846 0.132222 1.89679L4.91222 8.39979C5.02376 8.56037 5.08344 8.75127 5.08322 8.94679V15.4748C5.08327 15.6165 5.12273 15.7554 5.19719 15.876C5.27166 15.9966 5.37819 16.094 5.50488 16.1575C5.63157 16.221 5.77343 16.2481 5.91459 16.2356C6.05575 16.2231 6.19065 16.1716 6.30422 16.0868L8.42522 14.4868C8.56986 14.3788 8.68737 14.2387 8.76843 14.0774C8.84949 13.9162 8.89187 13.7383 8.89222 13.5578V8.94679C8.89201 8.75127 8.95168 8.56037 9.06322 8.39979L13.8412 1.89979C13.9179 1.79117 13.9632 1.6635 13.972 1.53083C13.9809 1.39816 13.9529 1.26563 13.8913 1.14779C13.8297 1.02996 13.7368 0.931397 13.6228 0.862943C13.5088 0.794489 13.3782 0.758795 13.2452 0.759786ZM8.32522 7.86779C8.10148 8.18304 7.98158 8.5602 7.98222 8.94679V13.5598C7.98214 13.5986 7.97307 13.6368 7.95572 13.6715C7.93837 13.7062 7.91321 13.7364 7.88222 13.7598L5.98822 15.1878V8.94679C5.98869 8.56394 5.871 8.19027 5.65122 7.87679L2.53122 3.63179H11.4362L8.32522 7.86779ZM12.1032 2.72479H1.86522L1.08822 1.66679H12.8802L12.1032 2.72479Z" fill="black"/>
      </svg>
      `}
    />
  );
};

const GridIcon: FC<Icon> = ({opacity = '1'}) => {
  return (
    <SvgXml
      width={18}
      height={18}
      xml={`
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1H7.222V7.222H1V1Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="${opacity}"/>
      <path d="M10.778 1H17V7.222H10.778V1Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="${opacity}"/>
      <path d="M10.778 10.778H17V17H10.778V10.778Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="${opacity}"/>
      <path d="M1 10.778H7.222V17H1V10.778Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="${opacity}"/>
      </svg>
      `}
    />
  );
};

const RowsIcon: FC<Icon> = ({opacity = '1'}) => {
  return (
    <SvgXml
      width={21}
      height={16}
      xml={`
      <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.6771 12.308H1.2151C1.13417 12.308 1.05403 12.324 0.979288 12.355C0.904542 12.386 0.836656 12.4315 0.779522 12.4888C0.722387 12.5462 0.677129 12.6142 0.64634 12.689C0.615551 12.7639 0.599838 12.8441 0.600101 12.925V15.385C0.600101 15.5481 0.664895 15.7045 0.78023 15.8199C0.895565 15.9352 1.05199 16 1.2151 16H3.6771C3.84021 16 3.99664 15.9352 4.11197 15.8199C4.22731 15.7045 4.2921 15.5481 4.2921 15.385V12.925C4.29236 12.8441 4.27665 12.7639 4.24586 12.689C4.21507 12.6142 4.16981 12.5462 4.11268 12.4888C4.05555 12.4315 3.98766 12.386 3.91291 12.355C3.83817 12.324 3.75803 12.308 3.6771 12.308ZM3.6771 0H1.2151C1.05199 0 0.895565 0.0647944 0.78023 0.180129C0.664895 0.295464 0.600101 0.451892 0.600101 0.615V3.077C0.600101 3.24011 0.664895 3.39654 0.78023 3.51187C0.895565 3.62721 1.05199 3.692 1.2151 3.692H3.6771C3.84021 3.692 3.99664 3.62721 4.11197 3.51187C4.22731 3.39654 4.2921 3.24011 4.2921 3.077V0.615C4.2921 0.451892 4.22731 0.295464 4.11197 0.180129C3.99664 0.0647944 3.84021 0 3.6771 0ZM3.6771 6.154H1.2151C1.05199 6.154 0.895565 6.21879 0.78023 6.33413C0.664895 6.44946 0.600101 6.60589 0.600101 6.769V9.231C0.600101 9.39411 0.664895 9.55054 0.78023 9.66587C0.895565 9.78121 1.05199 9.846 1.2151 9.846H3.6771C3.84021 9.846 3.99664 9.78121 4.11197 9.66587C4.22731 9.55054 4.2921 9.39411 4.2921 9.231V6.769C4.2921 6.60589 4.22731 6.44946 4.11197 6.33413C3.99664 6.21879 3.84021 6.154 3.6771 6.154ZM19.6771 12.923H7.3691C7.20599 12.923 7.04957 12.9878 6.93423 13.1031C6.8189 13.2185 6.7541 13.3749 6.7541 13.538V14.769C6.7541 14.9321 6.8189 15.0885 6.93423 15.2039C7.04957 15.3192 7.20599 15.384 7.3691 15.384H19.6771C19.8402 15.384 19.9966 15.3192 20.112 15.2039C20.2273 15.0885 20.2921 14.9321 20.2921 14.769V13.538C20.2916 13.3752 20.2265 13.2193 20.1113 13.1044C19.996 12.9895 19.8399 12.925 19.6771 12.925V12.923ZM19.6771 0.615H7.3691C7.20599 0.615 7.04957 0.679794 6.93423 0.795129C6.8189 0.910464 6.7541 1.06689 6.7541 1.23V2.462C6.7541 2.62511 6.8189 2.78154 6.93423 2.89687C7.04957 3.01221 7.20599 3.077 7.3691 3.077H19.6771C19.8402 3.077 19.9966 3.01221 20.112 2.89687C20.2273 2.78154 20.2921 2.62511 20.2921 2.462V1.231C20.2922 1.15015 20.2764 1.07007 20.2456 0.995343C20.2147 0.920612 20.1694 0.852697 20.1123 0.795483C20.0552 0.738269 19.9874 0.692879 19.9127 0.66191C19.838 0.63094 19.7579 0.615 19.6771 0.615ZM19.6771 6.769H7.3691C7.20599 6.769 7.04957 6.83379 6.93423 6.94913C6.8189 7.06446 6.7541 7.22089 6.7541 7.384V8.615C6.7541 8.77811 6.8189 8.93454 6.93423 9.04987C7.04957 9.16521 7.20599 9.23 7.3691 9.23H19.6771C19.8402 9.23 19.9966 9.16521 20.112 9.04987C20.2273 8.93454 20.2921 8.77811 20.2921 8.615V7.385C20.2922 7.30415 20.2764 7.22407 20.2456 7.14934C20.2147 7.07461 20.1694 7.0067 20.1123 6.94948C20.0552 6.89227 19.9874 6.84688 19.9127 6.81591C19.838 6.78494 19.7579 6.769 19.6771 6.769Z" fill="#333333" fill-opacity="${opacity}"/>
      </svg>      
      `}
    />
  );
};

const StarIcon = () => {
  return (
    <SvgXml
      width={17}
      height={16}
      xml={`
      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.9767 5.79581C16.9497 5.7127 16.9 5.63879 16.8332 5.58243C16.7664 5.52606 16.6852 5.48948 16.5987 5.47681L11.6387 4.75581L9.4197 0.260809C9.38095 0.18237 9.32104 0.116332 9.24673 0.0701571C9.17242 0.0239824 9.08668 -0.000488281 8.9992 -0.000488281C8.91171 -0.000488281 8.82597 0.0239824 8.75166 0.0701571C8.67735 0.116332 8.61744 0.18237 8.5787 0.260809L6.3607 4.75581L1.3997 5.47681C1.31308 5.48938 1.23171 5.52593 1.16479 5.58234C1.09787 5.63874 1.04806 5.71275 1.02101 5.79599C0.99396 5.87922 0.990739 5.96837 1.01171 6.05334C1.03269 6.13831 1.07702 6.21572 1.1397 6.27681L4.7287 9.77681L3.8817 14.7168C3.86706 14.803 3.87679 14.8915 3.90978 14.9724C3.94277 15.0533 3.99772 15.1234 4.06842 15.1748C4.13912 15.2262 4.22277 15.2567 4.30993 15.2631C4.39708 15.2695 4.48428 15.2514 4.5617 15.2108L8.9997 12.8768L13.4357 15.2058C13.5131 15.2464 13.6003 15.2645 13.6875 15.2581C13.7746 15.2517 13.8583 15.2212 13.929 15.1698C13.9997 15.1184 14.0546 15.0483 14.0876 14.9674C14.1206 14.8865 14.1303 14.798 14.1157 14.7118L13.2687 9.77181L16.8577 6.27181C16.9195 6.21119 16.9634 6.13463 16.9844 6.05061C17.0054 5.96659 17.0027 5.8784 16.9767 5.79581ZM12.4377 9.27581C12.3832 9.32886 12.3425 9.39435 12.319 9.46665C12.2955 9.53895 12.2899 9.61587 12.3027 9.69081L13.0307 13.9378L9.2177 11.9318C9.15045 11.8965 9.07564 11.8781 8.9997 11.8781C8.92375 11.8781 8.84894 11.8965 8.7817 11.9318L4.9677 13.9368L5.6997 9.68981C5.71251 9.61487 5.70692 9.53795 5.68341 9.46565C5.65989 9.39336 5.61915 9.32786 5.5647 9.27481L2.4757 6.26781L6.7397 5.64781C6.81487 5.63691 6.88627 5.60792 6.94776 5.56333C7.00925 5.51873 7.05899 5.45988 7.0927 5.39181L8.9997 1.52781L10.9067 5.39181C10.9404 5.45988 10.9901 5.51873 11.0516 5.56333C11.1131 5.60792 11.1845 5.63691 11.2597 5.64781L15.5237 6.26781L12.4377 9.27581Z" fill="black"/>
      </svg>
      `}
    />
  );
};

const HomeIcon: FC<Icon> = ({opacity = '1'}) => {
  return (
    <SvgXml
      width={31}
      height={24}
      xml={`
      <svg width="31" height="24" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.022 6.22599L5.144 14.361V23.146C5.14479 23.3728 5.23543 23.59 5.39606 23.75C5.5567 23.9101 5.77422 24 6.001 24L12.001 23.984C12.2276 23.9829 12.4445 23.8922 12.6044 23.7316C12.7643 23.571 12.854 23.3536 12.854 23.127V17.999C12.854 17.7717 12.9443 17.5537 13.105 17.393C13.2657 17.2323 13.4837 17.142 13.711 17.142H17.14C17.3673 17.142 17.5853 17.2323 17.746 17.393C17.9067 17.5537 17.997 17.7717 17.997 17.999V23.123C17.9966 23.2358 18.0185 23.3475 18.0614 23.4519C18.1043 23.5562 18.1673 23.651 18.2469 23.7309C18.3266 23.8108 18.4212 23.8742 18.5253 23.9175C18.6295 23.9607 18.7412 23.983 18.854 23.983L24.854 24C25.0813 24 25.2993 23.9097 25.46 23.749C25.6207 23.5883 25.711 23.3703 25.711 23.143V14.356L15.842 6.22599C15.7259 6.13232 15.5812 6.08123 15.432 6.08123C15.2828 6.08123 15.1381 6.13232 15.022 6.22599ZM30.622 11.756L26.143 8.06399V0.645991C26.143 0.475457 26.0753 0.311907 25.9547 0.191321C25.8341 0.0707352 25.6705 0.00299072 25.5 0.00299072H22.5C22.3295 0.00299072 22.1659 0.0707352 22.0453 0.191321C21.9247 0.311907 21.857 0.475457 21.857 0.645991V4.53599L17.057 0.588991C16.5967 0.210295 16.0191 0.0032506 15.423 0.0032506C14.8269 0.0032506 14.2493 0.210295 13.789 0.588991L0.232997 11.755C0.101625 11.8636 0.0187682 12.02 0.00264146 12.1897C-0.0134852 12.3594 0.038438 12.5286 0.146997 12.66L1.513 14.321C1.56673 14.3863 1.6328 14.4403 1.70744 14.48C1.78207 14.5197 1.8638 14.5443 1.94796 14.5524C2.03211 14.5605 2.11703 14.5519 2.19785 14.5271C2.27868 14.5023 2.35383 14.4618 2.419 14.408L15.019 4.02799C15.1351 3.93432 15.2798 3.88323 15.429 3.88323C15.5782 3.88323 15.7229 3.93432 15.839 4.02799L28.439 14.408C28.5704 14.5166 28.7396 14.5685 28.9093 14.5523C29.079 14.5362 29.2354 14.4534 29.344 14.322L30.71 12.661C30.7638 12.5955 30.8041 12.5201 30.8286 12.4391C30.8532 12.358 30.8614 12.2729 30.853 12.1886C30.8445 12.1043 30.8195 12.0225 30.7794 11.9479C30.7392 11.8734 30.6847 11.8074 30.619 11.754L30.622 11.756Z" fill="#333333" fill-opacity="${opacity}"/>
      </svg>
      `}
    />
  );
};

const SearchIcon: FC<Icon> = ({opacity = '1', color = '#333333'}) => {
  return (
    <SvgXml
      width={26}
      height={26}
      xml={`
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.556 11.778C21.556 13.7119 20.9825 15.6024 19.9081 17.2104C18.8337 18.8183 17.3066 20.0716 15.5199 20.8117C13.7332 21.5518 11.7672 21.7454 9.87041 21.3681C7.97367 20.9908 6.23139 20.0596 4.86391 18.6921C3.49644 17.3246 2.56517 15.5823 2.18789 13.6856C1.8106 11.7888 2.00424 9.82282 2.74431 8.03612C3.48438 6.24943 4.73765 4.72231 6.34564 3.64789C7.95362 2.57347 9.8441 2 11.778 2C13.0621 2 14.3336 2.25292 15.5199 2.74431C16.7062 3.2357 17.7841 3.95594 18.6921 4.86391C19.6001 5.77188 20.3203 6.8498 20.8117 8.03612C21.3031 9.22244 21.556 10.4939 21.556 11.778V11.778Z" stroke="${color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="${opacity}"/>
      <path d="M24.0001 24L18.6831 18.683" stroke="${color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="${opacity}"/>
      </svg>
      `}
    />
  );
};

const FavoriteIcon: FC<Icon> = ({opacity = '1'}) => {
  return (
    <SvgXml
      width={24}
      height={24}
      xml={`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.9619 9.69101C23.9168 9.55217 23.8333 9.42892 23.7212 9.33549C23.609 9.24206 23.4727 9.18227 23.3279 9.16301L15.9279 8.17601L12.6999 1.44001C12.6373 1.3073 12.5383 1.19512 12.4143 1.11656C12.2904 1.03799 12.1467 0.996277 11.9999 0.996277C11.8532 0.996277 11.7095 1.03799 11.5855 1.11656C11.4616 1.19512 11.3626 1.3073 11.2999 1.44001L8.07595 8.17901L0.675946 9.16601C0.531243 9.18533 0.394956 9.24519 0.282818 9.33866C0.170679 9.43213 0.0872622 9.55541 0.0421965 9.69427C-0.00286921 9.83313 -0.0077459 9.9819 0.0281294 10.1234C0.0640048 10.2649 0.139169 10.3934 0.244945 10.494L5.65495 15.644L4.29995 22.987C4.27342 23.1307 4.28809 23.2789 4.34227 23.4146C4.39646 23.5503 4.48793 23.6679 4.60613 23.7537C4.72433 23.8396 4.86441 23.8903 5.0102 23.8999C5.15598 23.9095 5.3015 23.8776 5.42995 23.808L11.9999 20.254L18.5699 23.807C18.6984 23.8766 18.8439 23.9085 18.9897 23.8989C19.1355 23.8893 19.2756 23.8386 19.3938 23.7527C19.512 23.6669 19.6034 23.5493 19.6576 23.4136C19.7118 23.2779 19.7265 23.1297 19.6999 22.986L18.3499 15.641L23.7599 10.491C23.8656 10.3903 23.9407 10.2617 23.9764 10.1202C24.0122 9.97862 24.0072 9.82983 23.9619 9.69101Z" fill="#333333" fill-opacity="${opacity}"/>
      </svg>      
      `}
    />
  );
};

const AccountIcon: FC<Icon> = ({opacity = '1'}) => {
  return (
    <SvgXml
      width={19}
      height={24}
      xml={`
      <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 21.326C19.0274 18.4688 18.0744 15.6886 16.3 13.449C15.529 12.4774 14.5484 11.6925 13.4315 11.153C12.3147 10.6135 11.0903 10.3333 9.84997 10.3333C8.60961 10.3333 7.38527 10.6135 6.26839 11.153C5.15152 11.6925 4.17097 12.4774 3.39996 13.449C1.62725 15.6861 0.67436 18.4629 0.699966 21.317C3.54877 22.7391 6.66906 23.5346 9.85097 23.65C13.0406 23.6027 16.1744 22.8067 19 21.326Z" fill="#333333" fill-opacity="${opacity}"/>
      <path d="M9.84797 9.50301C12.3752 9.50301 14.424 7.45427 14.424 4.92701C14.424 2.39976 12.3752 0.351013 9.84797 0.351013C7.32072 0.351013 5.27197 2.39976 5.27197 4.92701C5.27197 7.45427 7.32072 9.50301 9.84797 9.50301Z" fill="#333333" fill-opacity="${opacity}"/>
      </svg>
      `}
    />
  );
};

export {
  LogoIcon,
  FacebookIcon,
  TwitterIcon,
  GoogleIcon,
  AppleIcon,
  UserIcon,
  PasswordIcon,
  BurgerIcon,
  CartIcon,
  LogoSmallIcon,
  FilterIcon,
  GridIcon,
  RowsIcon,
  StarIcon,
  HomeIcon,
  SearchIcon,
  FavoriteIcon,
  AccountIcon,
};
