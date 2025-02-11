import { AsideNav } from "../components/aside-nav";
import { Editor } from "../components/editor/editor";
import { PageWrapper } from "../components/page-wrapper";

// comentario
export function EditorPage(){
  return(
    <PageWrapper>
      <AsideNav />
      <Editor />
    </PageWrapper>
  )
}
