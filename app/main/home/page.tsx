import React from "react";
import Card from "@/components/Card";
import KindLinkHeader from "@/components/KindLinkHeader";
import PageHeader from "@/components/PageHeader";
import Navbar from "@/components/Navbar";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-900 px-6 py-8">

            <PageHeader
        title="Home Page"
        subtitle=""
        leftComponent={<KindLinkHeader/> }
      />
      {/* For You */}
      <section className="mb-10 text-white">
        <h2 className="text-2xl font-bold mb-4 pt-10">For You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card title="Share & Smile🤝" description="Helping children with education." image="https://content.jdmagicbox.com/comp/amravati/f1/9999px721.x721.200513120044.l3f1/catalogue/vision-integrity-development-association-vida-amravati-amravati-camp-amravati-ngos-for-organ-donation-gggz7qs0z0.jpg" />
          <Card title="Feel Good💝" description="Providing Blood to the needy." image="https://www.blog.impaac.org/wp-content/uploads/2022/12/Crowdfunding-Benefits-Impaac-Foundation-non-profit-Nagpur-FeelGoodFoundation-1024x1024.jpg" />
          <Card title="Chip Nagpur🔃" description="Supporting wildlife conservation." image="https://www.blog.impaac.org/wp-content/uploads/2022/12/Crowdfunding-Benefits-Impaac-Foundation-non-profit-Nagpur-CHIP-1024x1024.jpg" />
        </div>
      </section>

      {/* Limited Time */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold  mb-4">Limited Time</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card title="Smile Foundation😊" description="Urgent flood relief support." image="https://www.smilefoundationindia.org/donation/disaster-relief-file/images/flood-relief-banner2.webp" />
          <Card title="Gajera Trust🤝" description="Medical aid for rural areas." image="https://smcgh.edu.in/wp-content/uploads/2024/02/582577521-bp-test-at-home-copy-1024x683.jpg" />
          <Card title="Project HOME🏡" description="Winter clothing drive." image="https://media.istockphoto.com/id/856564654/photo/donation-box-with-clothes.jpg?s=612x612&w=0&k=20&c=wd2TfIydgFL-K_WU40LoYtgIoE8y-N2OPA1SU_klnXY=" />
        </div>
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-2xl font-bold  mb-4">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <Card title="Education" image="https://newhorizonindia.edu/wp-content/uploads/2024/10/download-20.png" />
          <Card title="Health" image="https://static.vecteezy.com/system/resources/previews/002/136/625/non_2x/world-health-day-illustration-concept-with-characters-people-are-exercising-yoga-living-healthy-vector.jpg" />
          <Card title="Environment" image="https://images.theconversation.com/files/427100/original/file-20211018-17-7bf8no.jpg?ixlib=rb-4.1.0&rect=7%2C7%2C4985%2C3315&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" />
          <Card title="Animals" image="https://media.istockphoto.com/id/1995859710/photo/smiling-woman-vet-performs-checkup-on-attentive-dog.jpg?s=612x612&w=0&k=20&c=pfp6XCuFL_GHhucJm_HgpGq_HFa_YfF4QG-v3pYP7_s=" />
          <Card title="Food & Hunger" image="https://media.istockphoto.com/id/619643870/photo/hungry-african-children-asking-for-food-africa.jpg?s=612x612&w=0&k=20&c=HuSbhCK-BNFVSQsVfSa63gehixkKAfRak2HmQYw7mhY=" />
          <Card title="Women Empowerment" image="https://static.vecteezy.com/system/resources/thumbnails/045/989/550/small_2x/banner-for-women-s-day-women-of-different-nationalities-stand-side-by-side-concept-of-movement-for-gender-equality-and-women-s-empowerment-free-vector.jpg" />
        </div>
      </section>
    </div>
  );
};

export default Page;
