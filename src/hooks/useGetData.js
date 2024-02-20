import { ref } from "vue";
import { useAreaStore } from '@/stores/area'
import { filterContent } from "@/config/requestConfig";


export default function () {
  const areaStore = useAreaStore()
  const option = ref({})

  const getData = async (url) => {
    const result = await filterContent(url, {})
    option.value = result.data.data
  }

  return { getData, option, areaStore }
}