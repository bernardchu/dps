import Head from "next/head";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import DpsPetDetail from "../../src/adopt/pet-detail/DpsPetDetail";
import DpsApi from "../../src/api/DpsApi";
import { IDpsAvailableIdResponse } from "../../src/api/IDpsApiResponses";
import { pageTitle } from "../../src/common/DpsConstants";
import { defaultLayout } from "../_app";

export default function PetDetail({ pet, print, host }: { pet: IDpsAvailableIdResponse, print: boolean, host: string }) {
  const title = `${pageTitle} - ${pet.name}`;
  const description = `${pet.age} ${pet.breed} ${pet.species} available for adoption from ${pageTitle}`;
  const imageAlt = `A photo of ${pet.name}`;
  return <>
    <Head>
      {/* OpenGraph */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      {host && <meta property="og:url" content={host} />}
      {pet.pictures.map(picture => <meta property="og:image" content={picture} key={picture} />)}
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={pageTitle} />
      {pet.video && <meta property="og:video" content={pet.video} />}

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={pet.pictures[0]} />
      <meta name="twitter:image:alt" content={imageAlt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@DPSRescue" />
    </Head>
    <DpsPetDetail pet={pet} print={print} />
  </>
}

export async function getServerSideProps({ query, req }) {
  const { id, print } = query;
  const host = req.headers.host || null;
  const pet = await DpsApi.getAvailableById(id);
  return {
    props: {
      pet,
      print: print === 'true',
      host
    },
  }
}

PetDetail.getLayout = function getLayout(page: ReactElement) {
  const router = useRouter();
  const layout = router.query.print === 'true' ? ((page) => <body id="dps-app">{page}</body>) : defaultLayout;
  return layout(page);
}