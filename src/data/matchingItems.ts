export type MatchingPair = {
  term1: string;
  term2: string;
  /**
   * Giải thích ý nghĩa thuật ngữ/cặp trong bối cảnh
   * Công nghiệp hóa - hiện đại hóa và hội nhập kinh tế Việt Nam.
   */
  explanation: string;
};

export const matchingPairs: MatchingPair[] = [
  {
    term1: 'Công nghiệp hóa',
    term2: 'Từ thủ công sang máy móc',
    explanation: 'Là quá trình chuyển đổi căn bản, toàn diện các hoạt động sản xuất từ việc sử dụng sức lao động thủ công là chính sang sử dụng công nghệ, máy móc hiện đại để tạo ra năng suất lao động cao.',
  },
  {
    term1: 'Hiện đại hóa',
    term2: 'Ứng dụng công nghệ tiên tiến',
    explanation: 'Là quá trình ứng dụng và trang bị những thành tựu khoa học, công nghệ tiên tiến, hiện đại nhất vào trong các lĩnh vực của đời sống xã hội và sản xuất.',
  },
  {
    term1: 'Mục tiêu cốt lõi',
    term2: 'Xây dựng cơ sở vật chất - kỹ thuật',
    explanation: 'Tiến hành CNH-HĐH nhằm xây dựng nền tảng cơ sở vật chất - kỹ thuật vững chắc cho Chủ nghĩa xã hội, đáp ứng yêu cầu bứt phá trong cuộc Cách mạng Công nghiệp 4.0.',
  },
  {
    term1: 'Tính tất yếu khách quan',
    term2: 'Chống tụt hậu kinh tế',
    explanation: 'Việt Nam đi lên từ một nước nông nghiệp lạc hậu, do đó đẩy mạnh CNH-HĐH là con đường duy nhất và tất yếu để khắc phục nguy cơ tụt hậu xa hơn về kinh tế so với thế giới.',
  },
  {
    term1: 'Động lực phát triển',
    term2: 'Nguồn nhân lực chất lượng cao',
    explanation: 'Con người là yếu tố trung tâm. Việc đào tạo và phát triển nguồn nhân lực chất lượng cao, có kỹ năng số là nền tảng để chuyển đổi thành công sang nền kinh tế tri thức.',
  },
  {
    term1: 'Nền tảng xã hội',
    term2: 'Liên minh Công - Nông - Trí',
    explanation: 'Quá trình CNH-HĐH không chỉ phát triển kinh tế mà còn giúp củng cố vững chắc khối liên minh giữa giai cấp công nhân, nông dân và đội ngũ trí thức trong bối cảnh toàn cầu hóa.',
  },
  {
    term1: 'Hội nhập quốc tế',
    term2: 'Tham gia chuỗi giá trị toàn cầu',
    explanation: 'Là quá trình gắn kết nền kinh tế Việt Nam với khu vực và thế giới thông qua các Hiệp định thương mại (như WTO, CPTPP...), giúp mở rộng thị trường và thu hút vốn đầu tư FDI.',
  },
  {
    term1: 'Thách thức hội nhập',
    term2: 'Sức ép cạnh tranh gay gắt',
    explanation: 'Khi mở cửa, các doanh nghiệp nội địa phải đối mặt với sức ép cạnh tranh khốc liệt từ các tập đoàn nước ngoài, đi kèm rủi ro rơi vào "bẫy thu nhập trung bình" nếu không tự chủ được công nghệ.',
  },
];