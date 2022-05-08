import Head from "next/head";
import DpsPetDetail from "../../src/adopt/pet-detail/DpsPetDetail";
import DpsApi from "../../src/api/DpsApi";
import { IDpsAvailableIdResponse } from "../../src/api/IDpsApiResponses";
import { pageTitle } from "../../src/common/DpsConstants";

export default function PetDetail({ pet, print, host }: { pet: IDpsAvailableIdResponse, print: boolean, host: string }) {
  return <>
    <Head>
      <meta property="og:title" content={`${pageTitle} - ${pet.name}`} />
      <meta property="og:type" content="website" />
      {host && <meta property="og:url" content={host} />}
      {pet.pictures.map(picture => <meta property="og:image" content={picture} key={picture} />)}
      <meta property="og:image:alt" content={`A photo of ${pet.name}`} />
      <meta property="og:description" content={`${pet.age} ${pet.breed} ${pet.species} available for adoption from ${pageTitle}`} />
      <meta property="og:site_name" content={pageTitle} />
      {pet.video && <meta property="og:video" content={pet.video} />}
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